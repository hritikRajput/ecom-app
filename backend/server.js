const express = require("express");
const products = require("./db/products");
const users = require("./db/users");

//creating a server
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello there!");
});

app.get("/api/products", (req, res) => {
  res.status(200).json(products);
});

app.get("/api/auth/login", (req, res) => {
  res.status(200).json(users);
});

app.post("/api/auth/login", (req, res) => {
  const isUserRegistered = users.data.some(
    (user) =>
      user.number === req.body.number && user.password === req.body.password
  );
  isUserRegistered
    ? res.status(200).json({ message: "User found" })
    : res.status(401).json({ message: "User not found" });
});

app.listen(3000, () => {
  console.log("Server is up and running");
});
