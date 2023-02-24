//install the mongoose module
const mongoose = require("mongoose")

//connect to the database
const connection=mongoose.connect("mongodb://127.0.0.1:27017/onlineShoppingApp")

module.exports={
    connection
}

