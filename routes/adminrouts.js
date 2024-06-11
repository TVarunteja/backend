const admincontrollers = require("../controllers/admincontrollers");
const express = require("express");
const customersrouter = express.Router();

customersrouter.post("/insertcustomers", admincontrollers.insertcustomers);
customersrouter.get("/viewcustomers", admincontrollers.viewcustomers);
customersrouter.delete("/deletecustomer/:billnumber", admincontrollers.deletecustomer);
// customersrouter.post("/checkcustomerlogin", admincontrollers.checkcustomerlogin); // Added this for completeness
customersrouter.get("/getmdbybillno/:billnumber", admincontrollers.getmdbybillno); // Added the new route

module.exports = customersrouter;
