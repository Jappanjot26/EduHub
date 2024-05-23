// backend/models/User.js
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { collection: "Edu-Hub" }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
