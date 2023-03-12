const mongoose = require("mongoose");

const Pharmacy = new mongoose.Schema({
  pname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
  number: { type: String, required: true },
  license: { type: String, required: true },
  verification: { type: Boolean, required: true },
});

const PharmacyModel = mongoose.model("pharmacies", Pharmacy);
module.exports = PharmacyModel;
