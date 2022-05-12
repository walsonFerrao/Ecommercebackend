
const express=require("express")
const app=express()
const cors=require("cors")
const mongoose=require("mongoose")


const user=require("./Controllers/usercontroller")

app.use(express.json())
app.use(cors())
app.use("/users",user)





const connect=()=>{


    mongoose.connect("mongodb+srv://walson:123@cluster0.pkto4.mongodb.net/test")



}






app.listen(1080,()=>{

try{

    connect()
console.log("listerning to port 1080")
  
}
catch(err)
{

console.log(err)

}


})

