const express = require("express");
const takenawaycontrollers = require("../controllers/takenawaycontrollers");
const takenawayrouter = express.Router();

takenawayrouter.post("/takenawaycustomer", takenawaycontrollers.takenawaycustomer);
takenawayrouter.get("/viewcustomer", takenawaycontrollers.viewcustomer);

module.exports = takenawayrouter;
