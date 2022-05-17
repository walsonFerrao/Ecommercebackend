

const mongoose=require('mongoose')


const productschema= new mongoose.Schema({

    url:{type:String,required:false},
    title:{type:String,required:false},
    asin:{type:String,required:false},
    price:{type:String,required:false},
    brand:{type:String,required:false},
    product_details:{type:String,required:false},
    breadcrumbs:{type:String,required:false},
    images_list:[{type:String,required:false}],
    features:{type:String,required:false}
})





module.exports=mongoose.model("product",productschema)