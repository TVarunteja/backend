const Customers = require("../models/Admin");
const Md1 = require("../models/Md1");
const Md2 = require("../models/Md2");

// Insert customers function
const insertcustomers = async (request, response) => {
    try {
        const input = request.body;
        const existingBillnumber = await Customers.findOne({ billnumber: input.billnumber });
        
        if (existingBillnumber) {
            return response.status(400).send('Bill number must be unique.');
        }
        
        const customers = new Customers(input);
        await customers.save();
        response.send('Added Successfully');
    } catch (e) {
        if (e.code === 11000) { // MongoDB duplicate key error
            response.status(400).send('Duplicate key error: ' + JSON.stringify(e.keyValue));
        } else {
            response.status(500).send(e.message);
        }
    }
};

// Delete customer function
const deletecustomer = async (request, response) => {
    try {
        const bnum = request.params.billnumber;
        const customer = await Customers.findOne({ billnumber: bnum });
        if (customer) {
            await customer.deleteOne({ billnumber: bnum });
            response.status(200).send("Customer Deleted Successfully");
        } else {
            response.status(404).send("Customer with Bill Number Not Found");
        }
    } catch (error) {
        response.status(500).send(error.message);
    }
};

// Check customer login function
const checkcustomerlogin = async (request, response) => {
    try {
        const input = request.body;
        const customers = await Customers.findOne(input);
        response.json(customers);
    } catch (error) {
        response.status(500).send(error.message);
    }
};

// View customers function
const viewcustomers = async (request, response) => {
    try {
        const customers = await Customers.find();
        if (customers.length === 0) {
            response.send("DATA NOT FOUND");
        } else {
            response.json(customers);
        }
    } catch (error) {
        response.status(500).send(error.message);
    }
};

const getmdbybillno = async (request, response) => {
    try {
        const bnum = request.params.billnumber;
        const md1Record = await Md1.findOne({ billnumber: bnum });
        
        if (md1Record) {
            response.json({ collection: 'md1', data: md1Record });
        } else {
            const md2Record = await Md2.findOne({ billnumber: bnum });
            
            if (md2Record) {
                response.json({ collection: 'md2', data: md2Record });
            } else {
                response.status(404).send('Bill number not found in either md1 or md2');
            }
        }
    } catch (error) {
        response.status(500).send(error.message);
    }
};

module.exports = { insertcustomers, checkcustomerlogin, deletecustomer, viewcustomers, getmdbybillno };
