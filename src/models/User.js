const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: String,
  userId: String,
  email: String,
  role: String,
  photo: String,
  createdAt: Date,
});

const User = model("User", userSchema);

module.exports = User;
