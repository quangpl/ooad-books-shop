let express = require("express");
let router = express.Router();
const bookModel = require("../models/book");
const customerModel = require("../models/customer");
const staffModel = require("../models/staff")
const billModel = require("../models/bill");
const salaryModel = require("../models/salary")


router.post("/book", async function(req, res, next) {
  console.log(req.body);
    const book = await bookModel.add({
      typeId: req.body.typeId,
      name: req.body.name,
      author: req.body.author,
      numberOf: req.body.numberOf,
      unitPrice: req.body.unitPrice,
      publishBy: req.body.publishBy,
      publishAt: req.body.publishAt,
      image: req.body.image,
      importDate: req.body.importDate,
      description: req.body.description
    });
    res.json(book)
});

router.get("/books", async function(req, res, next) {
  const books = await bookModel.getAll();
  res.json({
    books: books
  });
});

router.post("/book/edit", async function(req, res, next) {
  const books = await bookModel.updateBook({
    id: req.body._id,
    typeId: req.body.typeId,
    name: req.body.name,
    author: req.body.author,
    numberOf: req.body.numberOf,
    unitPrice: req.body.unitPrice,
    publishBy: req.body.publishBy,
    image: req.body.image,
    description: req.body.description,
    importDate: req.body.importDate,
    publishAt: req.body.publishAt
  });

  res.json({
    books: books
  });
});

router.post("/book/delete", async function(req, res, next) {
  const books = await bookModel.delete(req.body.id);
  res.json({
    books: []
  });
});

//


router.get("/customers", async function(req, res, next) {
  const customers = await customerModel.getAll();
  res.json({
    customers
  });
});

router.post("/customer/edit", async function(req, res, next) {
  await customerModel.update({
    id: req.body.id,
    name:req.body.name,
    password:req.body.password,
    phone:req.body.phone,
    address:req.body.address,
    email:req.body.email
  });
  res.json({
    error: false
  });
});

router.post("/customer/delete", async function(req, res, next) {
   await customerModel.delete(req.body.id);
  res.json({
    error: false
  });
});


//
router.post("/staff", async function(req, res, next) {
 
  const staff = await staffModel.add({
    username: req.body.username,
    password:req.body.password,
    fullName:req.body.fullName,
    phone:req.body.phone,
    address:req.body.address,
    employedTime: Date.now()
  });
  res.json({
    staff
  });
});

router.get("/staffs", async function(req, res, next) {
  const staffs = await staffModel.getAll();
  res.json({
    staffs
  });
});

router.post("/staff/edit", async function(req, res, next) {
  const staff = await staffModel.update({
    id: req.body.id,
    username:req.body.username,
    password: req.body.password,
    fullName: req.body.fullName,
    phone:req.body.phone,
    address: req.body.address,
    employedTime: req.body.employedTime
  });

  res.json({
    error: false
  });
});

router.post("/staff/delete", async function(req, res, next) {
   await staffModel.delete(req.body.id);
  res.json({
    error: false
  });
});

//
router.post("/bill", async function(req, res, next) {
 
  const bill = await billModel.add({
    customerId: req.body.customerId,
    employeeId: req.body.employeeId,
    books: req.body.books
  });
  res.json({
    bill
  });
});

router.get("/bills", async function(req, res, next) {
  const bills = await billModel.getAll();
  res.json({
    bills
  });
});

router.post("/bill/edit", async function(req, res, next) {
  const bill = await billModel.update({
    id: req.body.id,
    customerId: req.body.customerId,
    employeeId: req.body.employeeId,
    books: req.body.books
  });

  res.json({
    error: false
  });
});

router.post("/bill/delete", async function(req, res, next) {
   await billModel.delete(req.body.id);
  res.json({
    error: false
  });
});


//
router.post("/salary", async function(req, res, next) {
 
  const bill = await billModel.add({
    customerId: req.body.customerId,
    employeeId: req.body.employeeId,
    books: req.body.books
  });
  res.json({
    bill
  });
});

router.get("/salaries", async function(req, res, next) {
  const bills = await billModel.getAll();
  res.json({
    bills
  });
});

router.post("/salary/edit", async function(req, res, next) {
  const bill = await billModel.update({
    id: req.body.id,
    customerId: req.body.customerId,
    employeeId: req.body.employeeId,
    books: req.body.books
  });

  res.json({
    error: false
  });
});

router.post("/salary/delete", async function(req, res, next) {
  await billModel.delete(req.body.id);
  res.json({
    error: false
  });
});



module.exports = router;
