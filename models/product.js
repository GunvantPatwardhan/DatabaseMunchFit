const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: [true, "Please input Product ID!"],
    unique: true,
  },
  name: {
    type: String,
    required: [true, "Please input Product Name!"],
    unique: true,
  },
  featured: {
    type: Boolean,
  },
  category: {
    type: Array,
    required: [true, "Please input Product Categories"],
  },
  price: {
    type: Array,
    required: [true, "Please input Product Price"],
  },
  image: {
    type: String,
    required: [true, "Please input Product Image Address!"],
  },
  description: {
    type: String,
    required: [true, "Please input Product Description!"],
  },
});

module.exports = mongoose.model("Product", productSchema);