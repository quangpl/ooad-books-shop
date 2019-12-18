let express = require("express");
let router = express.Router();
const bookModel = require("../models/book")
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
    description: req.body.description
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
module.exports = router;
