//install the mongoose module
const mongoose = require("mongoose")

//connect to the database
const connection=mongoose.connect("mongodb+srv://ramanand:ramanand@cluster0.8zattbo.mongodb.net/AveryDevis?retryWrites=true&w=majority")

module.exports={
    connection
}

