const mongoose = require("mongoose");

const Pharmacy = new mongoose.Schema(
  {
    pname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    quote: { type: String },
  },
);


const User = mongoose.model("pharmacy", Pharmacy);
module.exports = User;