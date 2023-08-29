const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
  try {
    const { name, email, number, password } = req.body;

    const existingUserWithEmail = await User.findOne({ email });
    const existingUserWithNumber = await User.findOne({
      number,
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

    const hashedPassword = await bcrypt.hash(password, 10);
    const createdUser = await User.create({
      name,
      email,
      number,
      password: hashedPassword,
    });
    res.status(201).json(createdUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "An error occurred while creating registering new user",
      err,
    });
  }
};

const loginUser = async (req, res) => {
  const secretKey = process.env.JWT_SECRET;
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ error: "Invalid credentials." });
    }

    //create a token
    let token = jwt.sign({ name: user.name, _id: user._id }, secretKey, {
      expiresIn: "8h",
    });
    const userWithToken = {
      _id: user._id,
      name: user.name,
      number: user.number,
      email: user.email,
      token: token,
    };
    res.status(200).json({ user: userWithToken });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "An error occurred while logging in",
      err,
    });
  }
};

module.exports = { createUser, loginUser };
