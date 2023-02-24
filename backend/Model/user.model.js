//install mongoose module
const mongoose=require("mongoose")

//write the userSchema 
const userSchema=mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    password:String,

})

//write the userModel

const UserModel=mongoose.model("user",userSchema)

module.exports={
    UserModel
}