const express=require("express")
const router=express.Router()
const Product=require('../Model/Productmodel')


router.get('',async (req,res)=>{
try{
   const checked=JSON.parse(req.query.checked)
   const sort=req.query.sort
   const page=req.query.page
// console.log(checked)
var product
product= await Product.find().skip((page-1)*50).limit(53)

if(checked['0to1']==true&&checked['1-2']==false)
{
    product= await Product.find().skip((page-1)*50).limit(53)

   product=product.filter((e)=>{
    return (e.price?.split("-")[0].replace("£","")<100)
  })
}
if(checked['0to1']==false&&checked['1-2']==true)
{
    product= await Product.find().skip((page-1)*50).limit(53)

     product=product.filter((e)=>{
        return (e.price?.split("-")[0].replace("£","")<200&&e.price?.split("-")[0].replace("£","")>100)
      })

}
if(sort=="SA")
 {
  product.sort((a,b)=>{

 return  a.price?.replace("£","").split("-")[0] - b.price?.replace("£","").split("-")[0]
        
  })
}
if(sort=="SB")
{
  product.sort((a,b)=>{

   return  a.price?.replace("£","").split("-")[0] - b.price?.replace("£","").split("-")[0]
        
   })
}
if(sort=="SN")
{
    product.sort((a,b)=>{

       return  a.title.localeCompare(b.title)
              
      })
}
if(sort=="SND")
{
    product.sort((a,b)=>{

         return  b.title.localeCompare(a.title)
              
        })
}
res.status(201).send(product)

}
catch(err)
{


console.log(err)
res.status(500).send(err)

}




})


module.exports =router