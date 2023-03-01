const mongoose = require("mongoose");

const Drug = new mongoose.Schema({
  drug_name: {
    type: String,
    require: true,
  },
  manufacturer: {
    type: String,
    require: true,
  },
//   supplier: {
//     type: String,
//     require: true,
//   },
//   ndc: {
//     type: String,
//     require: true,
//   },
//   expiration_date: {
//     type: String,
//     require: true,
//   },
//   quantity: {
//     type: String,
//     require: true,
//   },
//   unit_price: {
//     type: String,
//     require: true,
//   },
});

module.exports = mongoose.model("Drug", Drug);
