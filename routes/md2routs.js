const admincontollers= require("../controllers/md2controllers")

const express = require("express")
const Md2srouter = express.Router()


Md2srouter.post("/insertMd2",admincontollers.insertMd2)
Md2srouter.get("/md2customers",admincontollers.md2customers)
Md2srouter.delete("/md2deletecustomer/:billnumber",admincontollers.md2deletecustomer)


module.exports = Md2srouter