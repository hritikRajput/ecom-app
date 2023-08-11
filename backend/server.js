const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const db = require("./config/db");

// const products = require("./db/products");
const users = require("./db/users");
const Product = require("./models/Product");

//creating a server
const app = express();
app.use(express.json());
db();

//route for "/"
app.get("/", (req, res) => {
  res.send("Hello there!");
});

//route for "/api/products"
app.get("/api/products", async (req, res) => {
  try {
    const productsData = await Product.find({});
    productsData
      ? res.status(200).json(productsData)
      : res.status(404).json({ error: "No data found" });
  } catch (err) {
    console.log(err);
  }
});

// POST route to add multiple products
app.post("/api/products", async (req, res) => {
  try {
    const newProducts = req.body;
    const createdProducts = await Product.create(newProducts);
    res.status(201).json(createdProducts);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "An error occurred while creating new products", err });
  }
});

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
