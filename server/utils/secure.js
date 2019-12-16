const customerModel = require("../models/customer");
 
 
 const authCustomer = (req,res, next)=>{
    const token = req.headers['x-token'];
    const customer = customerModel.getByToken(token);
    
    if(!customer||!token){
        res.json({
            error: true,
            message:"Request is not valid"
        })
    }
    else {
        req.customer = customer;
        next()
    }
}
module.exports = {
  authCustomer
};