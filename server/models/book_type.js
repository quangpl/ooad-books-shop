const mongoose = require("mongoose");
const BooktypeSchema = require("../schemas/book_type");
let Booktype = mongoose.model("Booktype", BooktypeSchema);

Booktype.add = async ({name, slug}) => {
  let newBookType = new Booktype({ name, slug });

  await newBookType.save();
  return newBookType;
};

Booktype.update = async ({ id, name, slug }) => {
  return await Booktype.updateOne(
    {
      _id: mongoose.Types.ObjectId(id)
    },
    {
      name,
      slug
    }
  ).exec();
};

Booktype.delete = async id => {
  return await Booktype.deleteOne({
    _id: mongoose.Types.ObjectId(id)
  }).exec();
};


Booktype.getAll = async () => {
  return await Booktype.find({}).exec();
};

Booktype.getAllBookType = async () => {
    const types = await Booktype.getAll();
    const bookTypes = types.map(type=>type.name);
  return bookTypes;
};

module.exports = Booktype;
