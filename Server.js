const express = require("express")
const mongoose = require("mongoose")

const cors = require("cors") 
const dburl="mongodb://localhost:27017/VarunJulers"
mongoose.connect(dburl).then(() => {
    console.log("Connected to DB Successfully")
}).catch((err) => {
   console.log(err.message) 
});

const app = express()
app.use(express.json()) // to parse json data
app.use(cors())

const  adminrouter = require("./routes/adminrouts")
const  md1 = require("./routes/md1routs")
const  md2 = require("./routes/md2routs")


app.use("",adminrouter) 
app.use("",md1)
app.use("",md2)


const port=2033
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})