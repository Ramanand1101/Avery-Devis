//express packaege install
const express=require("express");
const{connection}=require("./db")
const {userRouter}=require("./router/user.router")
const cors=require("cors")

const app=express();
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Home page")
})

app.use("/user",userRouter)

app.listen(8080,async() => {
    try{
        await connection
        console.log("connected to db")
    }
    catch(err){
        console.log({"msg":"not connected to db","err":err.message})
    }
    console.log("Server is running on port 8080");
})