const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://hritikshivam:ecom2608@cluster0.jg0kbhb.mongodb.net/?retryWrites=true&w=majority"
    );
  } catch (err) {
    console.log("failed to connect to DB", err);
  }
};

module.exports = connectDB;
