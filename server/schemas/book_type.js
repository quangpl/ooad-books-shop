const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookTypeSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    slug: {
      type: String // example : the-loai-sach
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);
;

module.exports = BookTypeSchema;