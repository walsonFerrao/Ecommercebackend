
const express=require("express")

const {Router} = express
const router=Router()
const User=require("../Model/usermodel")



router.post("/",async (req,res)=>{
try{

    const user=await User.create(req.body)

console.log(user)

    res.status(201).send(user)


}
catch(err)
{

    res.status(500).send(err)

}

})

router.get("/:id",async (req,res)=>{
    try{
    
        const user=await User.findById(req.params.id)
    
    
        res.status(201).send(user)
    
    
    }
    catch(err)
    {
    
        res.status(500).send(err)
    
    }
    
    })




router.put("/cartitem/:id",async (req,res)=>{
    try{
        console.log(req.body)
    
        const update=await User.findById(req.params.id)
        update.cart.push(req.body)
    
        const user=await User.findByIdAndUpdate(req.params.id,update,{new:true}).lean().exec()
   
    
        res.status(201).send(user)
    
    
    }
    catch(err)
    {
        console.log(err)
        res.status(500).send(err)
    
    }
    
    })



    router.delete("/cartitem/:id",async (req,res)=>{
        try{
            console.log(req.query.index)
        
           const myuser=await User.findById(req.params.id).lean().exec()

        
         let cart=  myuser.cart.filter((e,i)=>{

          return  i!=req.query.index
          
           
           })
        
          const user=await User.findByIdAndUpdate(req.params.id,{"cart":cart},{new:true})

          res.status(201).send(user)


        
        }
       
        catch(err)
        {
            console.log(err)
            res.status(500).send(err)
        
        }
        
        })




module.exports=router