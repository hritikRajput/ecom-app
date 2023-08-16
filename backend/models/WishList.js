const mongoose = require("mongoose");
const { Schema } = mongoose;
const wishListSchema = new Schema(
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

const WishList = mongoose.model("wishlists", wishListSchema);
module.exports = WishList;
