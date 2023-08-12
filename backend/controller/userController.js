const User = require("../models/User");

const createUser = async (req, res) => {
  try {
    const newUser = req.body;

    const existingUserWithEmail = await User.findOne({ email: newUser.email });
    const existingUserWithNumber = await User.findOne({
      number: newUser.number,
    });

    if (existingUserWithEmail) {
      return res
        .status(400)
        .json({ error: "User with this email already exists." });
    }
    if (existingUserWithNumber) {
      return res
        .status(400)
        .json({ error: "User with this number already exists." });
    }
    const createdUser = await User.create(newUser);
    res.status(201).json(createdUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "An error occurred while creating registering new user",
      err,
    });
  }
};

module.exports = { createUser };
