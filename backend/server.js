const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const db = require("./config/db");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const productRouter = require("./routes/productRoutes");
const userRouter = require("./routes/userRoutes");
const wishListRouter = require("./routes/wishListRoutes");
const cartRouter = require("./routes/cartRoutes");

//creating a server
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
db();

//route for "/"
app.get("/", (req, res) => {
  res.send("Hello there!");
});

//route for "/api/products"
app.use("/api/products", productRouter);
//route for "/api/auth"
app.use("/api/auth", userRouter);
//route for "/api/wishlist"
app.use("/api/wishlist", wishListRouter);
//route for "/api/cart"
app.use("/api/cart", cartRouter);

mongoose.connection.once("open", () => {
  console.log("connected to db");
  app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
  });
});
