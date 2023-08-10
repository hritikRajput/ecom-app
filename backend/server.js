const express = require("express");
const products = require("./db/products");

//creating a server
const app = express();

app.get("/", (req, res) => {
  res.send("Hello there!");
});

app.get("/api/products", (req, res) => {
  res.status(200).json(products);
});

app.listen(3000, () => {
  console.log("Server is up and running");
});
