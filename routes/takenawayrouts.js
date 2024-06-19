const takenawaycontrollers = require("../controllers/takenawaycontrollers");
const express = require("express");
const takenawayrouter = express.Router();

takenawayrouter.post("/takenawaycustomer", takenawaycontrollers.takenawaycustomer);

module.exports = takenawayrouter;