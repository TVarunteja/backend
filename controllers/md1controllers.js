const Md1 = require("../models/Md1")
//to import the models

const insertMd1 = async (request, response) => {
    try 
    {
      const input = await request.body;
      const Md1s = new Md1(input);
      await Md1s.save();
      response.send('Added Successfully');
    } 
    catch(e) 
    {
      response.status(500).send(e.message);
    }
};
const md1customers = async (request, response) => 
  {
     try 
     {
       const md1 = await Md1.find();
       if(md1.length==0)
       {
         response.send("DATA NOT FOUND");
       }
       else
       {
         response.json(md1);
       }
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
     }
   };
   const md1deletecustomer = async (request, response) => {
    try {
        const bnum = request.params.billnumber;
        const customer = await Md1.findOne({ "billnumber": bnum });
        if (customer != null) {
            await customer.deleteOne({ "billnumber": bnum });
            response.status(200).send("Customer Deleted Successfully");
        } else {
            response.status(404).send("Customer with Bill Number Not Found");
        }
    } catch (error) {
        response.status(500).send(error.message);
    }
};

 

  module.exports = {insertMd1,md1customers,md1deletecustomer}