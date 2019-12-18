const mongoose = require('mongoose');
const BookSchema = require('../schemas/book');
let Book = mongoose.model("Book", BookSchema);
let Setting = require('./setting');
Book.add = async ({
  typeId,
  name,
  author,
  numberOf,
  unitPrice,
  publishBy,
  publishAt,
  image,
  description,
  importDate
}) => {
  let newBook = new Book({
    typeId,
    name,
    author,
    numberOf,
    unitPrice,
    publishBy,
    publishAt,
    image,
    description,
    importDate
  });

  await newBook.save();
  return newBook;
};

Book.updateBook = async ({
  id,
  typeId,
  name,
  author,
  numberOf,
  unitPrice,
  publishBy,
  image,
  description
}) => {
  const res = await Book.findOneAndUpdate(
    {
      _id: id
    },
    {
      $set: {
        typeId,
        name,
        author,
        numberOf,
        unitPrice,
        publishBy,
        image,
        description
      }
    }
  ).exec();

  console.log(res);
};


Book.delete = async (id) => {
    return await Book.deleteOne({
      _id: mongoose.Types.ObjectId(id)
    }).exec();
};

Book.getById = async (id) => {
    return await Book.findOne({
        _id: mongoose.Types.ObjectId(id)
    }).exec();
};

Book.getPriceById = async (id) => {
    let book = await Book.findOne({
        _id: mongoose.Types.ObjectId(id)
    }).exec();
    return book.unitPrice;
};
Book.addComment = async ({ bookId,customerId ,message}) => {
  let book = await Book.updateOne(
    {
      _id: mongoose.Types.ObjectId(bookId)
    },
    {
      $push: {
        comments: {
          customerId,
          message
        }
      }
    }
  ).exec();
  return book;
};

Book.getAll = async () => {
    return await Book.find({}).exec();
};

Book.getAllByNumber = async (num) => {
    return await Book.find({}).limit(num).exec();
};

Book.addViewCount = async (id) => {
    return await Book.updateOne({
      _id: mongoose.Types.ObjectId(id)
    },{
        $inc:{
            viewCount:1
        }
    }).exec();
};


Book.getByCategory = async category => {
  return await Book.find({
    typeId: category
  }).exec();
};


Book.isValid = async ({
    id,
    numberOfSale
}) => {
    let book = await Book.findOne({
        _id: id
    }).exec();
    return book.numberOf - numberOfSale >= 20;
};

Book.getByListId = async (listId) => {
    return Promise.all(listId.map(async (e) => {
        let book = await Book.getById(e);
        return book;
    }));
};
module.exports = Book;