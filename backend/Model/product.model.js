const mongoose=require("mongoose")

const productSchema=mongoose.Schema({
    name: String,
    price: String,
    category: String,
    size:String,
    image: String,
    description: String,
    rating:String
       
})
const ProductModel=mongoose.model("productAdd",productSchema)

module.exports={
    ProductModel
}
