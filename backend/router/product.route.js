const express=require("express")
const {ProductModel}=require("../Model/product.model")

const productRouter=express.Router()



productRouter.get("/", async (req, res) => {
    const category = req.query.category;
    const order = req.query.sort;
    const title = req.query.title;
    try {
        if (category) {
            const data = await ProductModel.find({ category });
            res.json(data);
        } else if (order && category) {
            if (order == "asc") {
                const data = await ProductModel.find({ category }).sort({ price: 1 });
                res.json(data);
            } else if (order == "dsc") {
                const data = await ProductModel.find({ category }).sort({ price: -1 });
                res.json(data);
            }
        } else if (order) {
            if (order == "asc") {
                const data = await ProductModel.find().sort({ price: 1 });
                res.json(data);
            } else if (order == "dsc") {
                const data = await ProductModel.find().sort({ price: -1 });
                res.json(data);
            }
        } else if (title) {
            const data = await ProductModel.find({ name: { $regex: title, $options: "si" } });
            res.json(data);
            console.log(title)
        } else {
            const data = await ProductModel.find();
            res.json(data);
        }
    } catch (error) {
        console.log(error);
        res.send(error);
    }
})


productRouter.get("/searh",async(req,res)=>{
    const {q="",page=1,limit=10}=req.query;
    const searchProducts= await ProductModel.find({ $text: { $search: query } })
    res.send(searchProducts)
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
    await ProductModel.findByIdAndDelete({_id:noteID})
    res.send({"msg":`Note with id:${noteID} has been Deleted`})
})

productRouter.patch("/update/:id",async(req,res)=>{
    const noteID=req.params.id
    await ProductModel.findByIdAndUpdate({_id:noteID})
    res.send({"msg":`Note with id:${noteID} has been updated`})
})
module.exports={
    productRouter
}