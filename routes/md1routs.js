const admincontollers= require("../controllers/md1controllers")

const express = require("express")
const Md1srouter = express.Router()


Md1srouter.post("/insertMd1",admincontollers.insertMd1)
Md1srouter.get("/md1customers",admincontollers.md1customers)
Md1srouter.delete("/md1deletecustomer/:billnumber",admincontollers.md1deletecustomer)


module.exports = Md1srouter