const mongoose = require("mongoose");

const takenawaysSchema = new mongoose.Schema({
    date: {
        type: Number,
        required: true
    },
    billnumber: {
        type: Number,
        required: true,
        unique: true  // Ensure billnumber is unique
    },
    name: {
        type: String,
        required: true
        // No unique constraint for name
    },
    fathername: {
        type: String,
        required: true
        // No unique constraint for fathername
    },
    address: {
        type: String,
        required: true
    },
    phonenumber: {
        type: Number,
        required: true
        // No unique constraint for phonenumber
    },
    itemtype: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
        // No unique constraint for amount
    },
    thereat: {
        type: String,
        required: true
        // No unique constraint for amount
    }
});

const Takenaways = mongoose.model('Takenaway', takenawaysSchema);

module.exports = Takenaways;
