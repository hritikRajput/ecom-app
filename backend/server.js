const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const db = require("./config/db");

const productRouter = require("./routes/productRoutes");
const userRouter = require("./routes/userRoutes");

//creating a server
const app = express();
app.use(express.json());
db();

//route for "/"
app.get("/", (req, res) => {
  res.send("Hello there!");
});

//route for "/api/products"
app.use("/api/products", productRouter);
//route for "/api/auth"
app.use("/api/auth", userRouter);

mongoose.connection.once("open", () => {
  console.log("connected to db");
  app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
  });
});
