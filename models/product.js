const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: [true, "Please input Product ID!"],
    unique: true,
  },
  name: {
    type: String,
    required: [true, "Please input Product Name!"],
    unique: true,
  },
  company: {
    type: String,
    required: [true, "Please enter Company Name!"],
    unique: false,
  },
  price: {
    type: Number,
    required: [true, "Please input Product Price"],
    unique: false,
  },
  image: {
    type: String,
    required: [true, "Please input Product Image Address!"],
  },
  description: {
    type: String,
    required: [true, "Please input Product Description!"],
  },
  category: {
    type: String,
    required: [true, "Please input Product Category"],
  },
  featured: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Product", productSchema);