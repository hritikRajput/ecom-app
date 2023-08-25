const mongoose = require("mongoose");
const { Schema } = mongoose;
const cartSchema = new Schema(
  {
    title: String,
    author: String,
    isbn: String,
    coverImage: String,
    description: String,
    price: Number,
    discount: Number,
    discountedPrice: Number,
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

const Cart = mongoose.model("cart", cartSchema);
module.exports = Cart;
