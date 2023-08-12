const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const db = require("./config/db");

const productRouter = require("./routes/productRoutes");

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

mongoose.connection.once("open", () => {
  console.log("connected to db");
  app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
  });
});
