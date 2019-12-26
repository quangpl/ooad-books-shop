let express = require("express");
let router = express.Router();
const bookModel = require("../models/book");
const customerModel = require("../models/customer");
const staffModel = require("../models/staff")
const billModel = require("../models/bill");
const salaryModel = require("../models/salary")
const bookTypeModel = require("../models/book_type")


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
  console.log({
    id: req.body.id,
    name: req.body.name,
    password: req.body.password,
    phone: req.body.phone,
    address: req.body.address,
    email: req.body.email
  });
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
    password: req.body.password,
    fullName: req.body.fullName,
    phone: req.body.phone,
    address: req.body.address,
    startAt: req.body.startAt
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
    customerId:req.body.customerId,
    employeeId: req.body.req.body,
    value: req.body.value
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
 
  const salary = await salaryModel.add({
    employeeId: req.body.employeeId,
    basicSalary: req.basicSalary,
    bonus: req.bonus,
    tax: req.body.tax,
    insurance: req.body.insurance
  });
  res.json({
    salary
  });
});

router.get("/salaries", async function(req, res, next) {
  const salaries = await salaryModel.getAll();
  res.json({
    salaries
  });
});

router.post("/salary/edit", async function(req, res, next) {
   await salaryModel.update({
    id: req.body.id,
    employeeId: req.body.employeeId,
    basicSalary: req.basicSalary,
    bonus: req.bonus,
    tax: req.body.tax,
    insurance: req.body.insurance
  });

  res.json({
    error: false
  });
});

router.post("/salary/delete", async function(req, res, next) {
  await salaryModel.delete(req.body.id);
  res.json({
    error: false
  });
});

//
router.post("/salary", async function(req, res, next) {
 
  const salary = await salaryModel.add({
    employeeId: req.body.employeeId,
    basicSalary: req.basicSalary,
    bonus: req.bonus,
    tax: req.body.tax,
    insurance: req.body.insurance
  });
  res.json({
    salary
  });
});

router.get("/salaries", async function(req, res, next) {
  const salaries = await salaryModel.getAll();
  res.json({
    salaries
  });
});

router.post("/salary/edit", async function(req, res, next) {
   await salaryModel.update({
    id: req.body.id,
    employeeId: req.body.employeeId,
    basicSalary: req.basicSalary,
    bonus: req.bonus,
    tax: req.body.tax,
    insurance: req.body.insurance
  });

  res.json({
    error: false
  });
});

router.post("/salary/delete", async function(req, res, next) {
  await salaryModel.delete(req.body.id);
  res.json({
    error: false
  });
});


//
router.post("/book-type", async function(req, res, next) {
 
  console.log(req.body)
  const bookType = await bookTypeModel.add({ name: req.body.name, slug: req.body.slug });
  res.json({
    book_type: bookType
  });
});

router.get("/book-type", async function(req, res, next) {
  const bookTypes = await bookTypeModel.getAll();
  res.json({
    book_types: bookTypes
  });
});


router.get("/book-type/detail", async function(req, res, next) {
  const bookTypes = await bookTypeModel.getAllBookType();
  res.json({
    book_types: bookTypes
  });
});

router.post("/book-type/edit", async function(req, res, next) {
  console.log(req.body)
  await bookTypeModel.update({
    id: req.body.id,
    name: req.body.name,
    slug: req.body.slug
  });

  res.json({
    error: false
  });
});

router.post("/book-type/delete", async function(req, res, next) {
    console.log(req.body);
  await bookTypeModel.delete(req.body.id);
  res.json({
    error: false
  });
});


module.exports = router;
