require("dotenv").config()
const express= require("express")
const mongoose= require("mongoose")
const bodyParser= require("body-parser")
const cors= require("cors")
const meals= require("./routes/meals")
const orders= require("./routes/orders")
const auth= require("./routes/auth")

const app=express()
app.use(bodyParser.json())
app.use(cors())
app.use("/api/meals",meals)
app.use("/api/orders",orders)
app.use("/api/auth",auth)

mongoose.set('strictQuery', true)

mongoose.connect(process.env.MONGO_URI)
.then((result) => {
    console.log('connected to MongoDB');
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message);
  });



const PORT=process.env.PORT

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

module.exports=app
