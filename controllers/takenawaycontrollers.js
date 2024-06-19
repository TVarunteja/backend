const Takenaway = require("../models/Takenaway");

// Insert takenaway function
const takenawaycustomer = async (request, response) => {
    try {
        const input = request.body;
        const existingBillnumber = await Takenaway.findOne({ billnumber: input.billnumber });
        
        if (existingBillnumber) {
            return response.status(400).send('Bill number must be unique.');
        }
        
        const takenaway = new takenaway(input);
        await takenaway.save();
        response.send('Added Successfully');
    } catch (e) {
        if (e.code === 11000) { // MongoDB duplicate key error
            response.status(400).send('Duplicate key error: ' + JSON.stringify(e.keyValue));
        } else {
            response.status(500).send(e.message);
        }
    }
};
module.exports = {takenawaycustomer};