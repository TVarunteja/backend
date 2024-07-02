const mongoose = require("mongoose");

const takenawaySchema = new mongoose.Schema({
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
    },
    fathername: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phonenumber: {
        type: Number,
        required: true
    },
    itemtype: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    thereat: {
        type: String,
        required: true
    }
});

const Takenaway = mongoose.model('Takenaway', takenawaySchema);

module.exports = Takenaway;
