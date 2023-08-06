const express = require("express");

//creating a server
const app = express();

app.get("/", (req, res) => {
  res.send("Hello there!");
});

app.listen(3000, () => {
  console.log("Server is up and running");
});
