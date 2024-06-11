const mongoose = require("mongoose");

const customersSchema = new mongoose.Schema({
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
    }
});

const Customers = mongoose.model('Customers', customersSchema);

module.exports = Customers;
