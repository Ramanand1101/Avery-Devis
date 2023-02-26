//express packaege install
const express=require("express");
const{connection}=require("./db")
require('dotenv').config()
const {userRouter}=require("./router/user.router")
const {productRouter}=require("./router/product.route")
const {cartProductsRouter} = require("./router/cartroute");
const{authenticate}=require("./user.middleware/authenticatemiddleware")
const cors=require("cors")


const app=express();
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Home page")
})

app.use("/user",userRouter)
app.use(authenticate)
app.use("/product",productRouter)
app.use("/cartproducts", cartProductsRouter);


app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("Connected to the DB")
          
    }
    catch(err){
        console.log({"msg":"Not connect to DB","error":err.message})
    }
    console.log(`Running the server at port 8080` )
})
