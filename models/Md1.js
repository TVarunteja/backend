const mongoose = require("mongoose");

const Md1sSchema = new mongoose.Schema({
    date: {
    type: Number,
    required: true
  },
  billnumber: {
    type: Number,
    required: true
  },
  billnumbermd1: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true,
    
  },
  amountatvj: {
    type: Number,
    required: true,
  },
  amountatmd1: {
    type: Number,
    required: true,
  }
});

const md1 = mongoose.model('md1', Md1sSchema);

module.exports = md1;
