const mongoose=require("mongoose")
require('dotenv').config()

//====================== Establish Connection ==================================
const connection=mongoose.connect(process.env.mongoURL)

//======================= Exports ==============================================

module.exports={
    connection
}
