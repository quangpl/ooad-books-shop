let express = require("express");
let router = express.Router();
const customerModel = require("../models/customer");
const bookModel = require("../models/book");
const billModel = require("../models/bill");
const { authCustomer } = require("../utils/secure");
router.get("/", async function(req, res, next) {
  res.json({
    message:"API Bookshop is active",
   error:false
  })
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
  });
});

router.post("/login", async function(req, res, next) {
  const result = await customerModel.login({
    password: req.body.password,
    email: req.body.email
  });

  res.json(result);
});

router.get("/auth", async function(req, res, next) {
  let customer = await authCustomer(req, res, next);
  if (customer) {
    req.customer = customer;
    res.status(200).json({
      name: req.customer.name,
      _id: req.customer._id,
      token: req.customer.token
    });
    return;
  } else {
    res.status(404).json({
      error: true
    });
    return;
  }
});

router.get("/books", async function(req, res, next) {
  const books = await bookModel.getAll();
  res.json({
    books
  });
});

router.get("/books/hot-view", async function(req, res, next) {
  const books = await bookModel.getHotViewBook();
  res.json({
    books
  });
});

router.get("/books/hot-sale", async function(req, res, next) {
  const books = await bookModel.getHotSaleBook();
  res.json({
    books
  });
});

router.get("/books/:id", async function(req, res, next) {
  const book = await bookModel.getById(req.params.id);
  await bookModel.addViewCount(req.params.id);
  res.json({
    book
  });
});

router.post("/books/comment", async function(req, res, next) {
  await bookModel.addComment({
    bookId: req.body.bookId,
    customerId: req.body.customerId,
    message: req.body.message
  });
  res.json({
    error: false
  });
});

router.post("/customers/get", async function(req, res, next) {
  const customer = await customerModel.getByToken(req.body.token);
  if (!customer) {
    res.json({
      error: true
    });
    return;
  }
  res.json({
    customer
  });
  return;
});

router.post("/payment", async function(req, res, next) {
  console.log(req.body);
  const bill = await billModel.add({
    customerId: req.body.customerId,
    employeeId: req.body.employeeId,
    books: req.body.books,
    value:req.body.value
  });
  res.json({
    error: false,
    bill
  });
});

module.exports = router;
