const mongoose = require("mongoose");
const { Schema } = mongoose;
const productSchema = new Schema(
  {
    name: String,
    author: String,
    coverImage: String,
    description: String,
    price: Number,
    format: String,
    genre: Array,
    pages: Number,
    publisher: String,
    language: String,
    rating: Number,
    isInStock: Boolean,
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("products", productSchema);

module.exports = Product;
