const mongoose = require("mongoose");

let list = mongoose.Schema({
  order: { type: Number, required: true, unique: true },
  item_1: {
    item_name: { type: String, required: true },
    quentity: { type: Number, required: true },
    many: { type: Number, require: true },
  },

  item_2: {
    item_name: { type: String, required: true },
    quentity: { type: Number, required: true },
    many: { type: Number, require: true },
  },

  item_3: {
    item_name: { type: String, required: true },
    quentity: { type: Number, required: true },
    many: { type: Number, require: true },
  },

  output: {
    item_1: { type: String },
    item_2: { type: String },
    item_3: { type: String },
  },

  updated: { type: String },
  date: Date,
});

let db = new mongoose.model("User", list);

module.exports = db;
