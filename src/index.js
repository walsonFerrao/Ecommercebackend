
const express=require("express")
const app=express()
const cors=require("cors")
const mongoose=require("mongoose")
const products=require('./Controllers/Productcontroller')

require("dotenv").config()
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)

const user=require("./Controllers/usercontroller")

app.use(express.json())
app.use(cors())
app.use("/users",user)
app.use('/products',products)


app.post("/payment", cors(), async (req, res) => {
	let { amount, id } = req.body
	try {
		const payment = await stripe.paymentIntents.create({
			amount,
			currency: "INR",
			description: "SHOE ROOM",
			payment_method: id,
			confirm: true
		})
		console.log("Payment", payment)
		res.json({
			message: "Payment successful",
			success: true
		})
	} catch (error) {
		console.log("Error", error)
		res.json({
			message: "Payment failed",
			success: false
		})
	}
})


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

