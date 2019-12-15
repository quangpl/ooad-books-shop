const mongoose = require('mongoose');
var randomstring = require("randomstring");

const Schema = mongoose.Schema;

const StaffSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    token: {
      type: String,
      default: randomstring.generate(20)
    },
    fullName: {
      type: String,
      required: true
    },
    phone: {
      type: Number,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false
    },
    employedTime: {
      type: Date,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = StaffSchema;