const mongoose = require("mongoose");

const Md2sSchema = new mongoose.Schema({
    date: {
    type: Number,
    required: true
  },
  billnumber: {
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
  amountatmd2: {
    type: Number,
    required: true,
  }
});

const md2 = mongoose.model('md2', Md2sSchema);

module.exports = md2;
