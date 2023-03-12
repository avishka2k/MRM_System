const mongoose = require("mongoose");

const Drug = new mongoose.Schema({
  drugname: {
    type: String,
    require: true,
  },
  manufacturer: {
    type: String,
    require: true,
  },
  supplier: {
    type: String,
    require: true,
  },
  ndc: {
    type: String,
    require: true,
  },
  exDate: {
    type: String,
    require: true,
  },
  quantity: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
  pharmacy: {
    type: String,
    require: true,
  },
});

const DrugModel = mongoose.model("drugs", Drug);
module.exports = DrugModel;
