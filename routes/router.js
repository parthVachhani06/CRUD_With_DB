
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const productModel = require("../models/product");
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/', (req, res) => {
      
    res.render("index");
});


router.post('/productForm', async (req,res)=>{
       

        var {editId} = req.body ;
        if(!editId){
            const productData = new productModel ({
                Product_name : req.body.Product_name,
                rate : req.body.rate,
                catagory : req.body.catagory,
                price : req.body.price
            })
        
            await productData.save();
            
           
        }else{

            await productModel.findByIdAndUpdate(editId,{
                Product_name : req.body.Product_name,
                rate : req.body.rate,
                catagory : req.body.catagory,
                price : req.body.price
            })
            console.log("Edit Complate..");
        }
    
       
        res.redirect("/views");
});

router.get('/views', async (req, res) => {
   const products = await productModel.find({});
   res.render('views', { products });
   console.log("complate viwes...");
});

router.get("/deleteproduct/:id", async (req, res) => {
    const id = req.params.id;
    await productModel.deleteOne({_id : id });
    res.redirect("/views");
    console.log("delet sucess....");
});


router.get("/editproduct/:id",async(req,res)=>{
    const id = req.params.id;
    const singleproduct = await productModel.findById(id);
    res.render("edit",{singleproduct});

})




module.exports = router;