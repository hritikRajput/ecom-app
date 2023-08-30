const mongoose = require("mongoose");
const User = require("./User");
const Product = require("./Product");
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
    userId: {
      type: Schema.Types.ObjectId,
      ref: User,
    },
    productId: {
      type: Schema.Types.ObjectId,
      ref: Product,
    },
  },

  {
    timestamps: true,
  }
);

const Cart = mongoose.model("cart", cartSchema);
module.exports = Cart;
