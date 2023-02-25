const express=require("express")
const {UserModel}=require("../Model/user.model")
const bcrypt = require('bcrypt');
var jwt=require("jsonwebtoken");
const userRouter=express.Router()

//user registered code here 
userRouter.post("/register",async(req,res)=>{
    const {fname,lname,email,password}=req.body
    
    try{
        const dupliuser=await UserModel.find({email})
        if(dupliuser.length>0){
            res.send("User Already exist")
        }
        else{
            bcrypt.hash(password, 5, async(err, hash)=>{
                if(err) res.send({"msg":"Something went wrong","error":err.message})
                else{
                    const user=new UserModel({fname,lname,email,password:hash})
                    await user.save()
                    res.send({"msg":"User has been  registered"})
                    
                }
            });
        }
    }
    catch(err){
        res.send({"msg":"User not registered","error":err.message})
    }
})

//user login code here
userRouter.post("/login",async(req,res)=>{
    const {email,password}=(req.body)
    try{
        const user=await UserModel.find({email})
        if(user.length>0){
            bcrypt.compare(password,user[0].password,(err,result)=>{
                if(result==true){
                    let token=jwt.sign({userID:user[0]._id},"masai")
                    res.send({"msg":"Logged in Successful","token":token})
                }
                else{
                    res.send({"msg":"Wrong Credientials"})
                }
          })
        }
          else{
            res.send ({"msg":"Wrong credientials"})
        }
    }
    catch(err){
        res.send({"msg":"Something went Wrong","error":err.message})
    }

  
})
module.exports={
    userRouter
}


