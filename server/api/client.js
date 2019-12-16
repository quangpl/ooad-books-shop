let express = require("express");
let router = express.Router();
const customerModel = require("../models/customer")
const {authCustomer} = require("../utils/secure")
router.get("/", async function(req, res, next) {
  // authCustomer(req, res, next);
});

router.post("/register", async function(req, res, next) {
  const customer = await customerModel.register({
    name: req.body.name,
    password: req.body.password,
    email: req.body.email,
    address: req.body.address,
    phone: req.body.phone
  });
  res.json({
    customer
  })
});

router.post("/login", async function(req, res, next) {
  const result = await customerModel.login({
    password: req.body.password,
    email: req.body.email,
  });

  res.json(result);
});

router.get("/auth", async function(req, res, next) {
  await authCustomer(req,res,next);
 if(req.customer){
    res.json({
      name: req.customer.name,
      _id: req.customer._id,
      token: req.customer.token
    });
 }
  return;
});



module.exports = router;
