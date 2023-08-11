const express = require("express");
const mongoose = require("mongoose");
const db = require("./config/db");

const products = require("./db/products");
const users = require("./db/users");

//creating a server
const app = express();
app.use(express.json());
db();

//route for "/"
app.get("/", (req, res) => {
  res.send("Hello there!");
});

//route for "/api/products"
app.get("/api/products", (req, res) => {
  res.status(200).json(products);
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
