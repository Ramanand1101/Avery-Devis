const express=require("express")
const {ProductModel}=require("../Model/product.model")

const productRouter=express.Router()

productRouter.get("/",async(req,res)=>{
    let query=req.query
    try{
        const notes=await ProductModel.find(query)
        res.send(notes)
    }
    catch(err){
        res.send({"msg":"Cannot get the users","error":err.message})
    }
})
productRouter.post("/create",async(req,res)=>{
    const payload=req.body
    try{
        const note=new ProductModel(payload)
        await note.save()
        res.send("Product Created")
    }
    catch(err){
        res.send({"msg":"Not created Notes","error":err.message})

    }
   
})

productRouter.delete("/delete/:id",async(req,res)=>{
    const noteID=req.params.id
    await ProductModel.findByIdAndDelete({_id:NoteID})
    res.send({"msg":`Note with id:${noteID} has been Deleted`})
})

productRouter.patch("/update/:id",async(req,res)=>{
    const noteID=req.params.id
    await ProductModel.findByIdAndUpdate({_id:NoteID})
    res.send({"msg":`Note with id:${noteID} has been updated`})
})
module.exports={
    productRouter
}