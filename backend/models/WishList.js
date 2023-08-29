const mongoose = require("mongoose");
const User = require("./User");
const { Schema } = mongoose;
const wishListSchema = new Schema(
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
    userId: {
      type: String,
      required: true,
      ref: User,
    },
  },

  {
    timestamps: true,
  }
);

const WishList = mongoose.model("wishlists", wishListSchema);
module.exports = WishList;
