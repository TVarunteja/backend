const Md2 = require("../models/Md2")
//to import the models

const insertMd2 = async (request, response) => {
    try 
    {
      const input = await request.body;
      const Md2s = new Md2(input);
      await Md2s.save();
      response.send('Added Successfully');
    } 
    catch(e) 
    {
      response.status(500).send(e.message);
    }
};
const md2customers = async (request, response) => 
  {
     try 
     {
       const md2 = await Md2.find();
       if(md2.length==0)
       {
         response.send("DATA NOT FOUND");
       }
       else
       {
         response.json(md2);
       }
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
     }
   };
   const md2deletecustomer = async (request, response) => {
    try {
        const bnum = request.params.billnumber;
        const customer = await Md2.findOne({ "billnumber": bnum });
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
 

  module.exports = {insertMd2,md2customers,md2deletecustomer}