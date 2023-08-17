const mongoose = require("mongoose");
const { Schema } = mongoose;
const productSchema = new Schema(
  {
    title: String,
    author: String,
    isbn: String,
    coverImage: String,
    description: String,
    price: Number,
    discount: Number,
    format: String,
    genre: Array,
    pages: Number,
    publishedDate: String,
    publisher: String,
    language: String,
    rating: Number,
    reviews: Array,
    dimensions: Object,
    isInStock: Boolean,
  },

  {
    timestamps: true,
  }
);

const Product = mongoose.model("products", productSchema);

module.exports = Product;
