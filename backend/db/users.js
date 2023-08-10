const { v4: uuid } = require("uuid");

const users = {
  data: [
    {
      id: uuid(),
      email: "r@gmail.com",
      password: "12345",
      number: 1234567890,
      name: "Ritik Rajput",
    },
    {
      id: uuid(),
      email: "ak@gmail.com",
      password: "1234567",
      number: 2234567890,
      name: "Akshay Kumar",
    },
    {
      id: uuid(),
      email: "rk@gmail.com",
      password: "12345",
      number: 3234567890,
      name: "Ranvir Kapoor",
    },
  ],
};

module.exports = users;
