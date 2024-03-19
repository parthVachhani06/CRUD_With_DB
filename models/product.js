const mongoose = require('mongoose')
const productScema =  new mongoose.Schema({
    Product_name: String ,
    rate : Number,
    catagory : String,
    price : Number,
})

const productModel =  mongoose.model ("product", productScema);

module.exports = productModel;



