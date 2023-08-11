const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const db = require("./config/db");

const users = require("./db/users");
const Product = require("./models/Product");

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

// POST route to add multiple products
app.use("/api/products", productRouter);

//route for "/api/auth/login"
app.post("/api/auth/login", (req, res) => {
  const isUserRegistered = users.data.some(
    (user) =>
      user.number === req.body.number && user.password === req.body.password
  );
  isUserRegistered
    ? res.status(200).json({ message: "User found" })
    : res.status(401).json({ message: "User not found" });
});

mongoose.connection.once("open", () => {
  console.log("connected to db");
  app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
  });
});
