const mongoose = require("mongoose");

// create userSchema , it will take objact of the data that expeted and the type of data

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  birthday: { type: Date, required: true },
  role: { type: mongoose.Schema.Types.ObjectId, ref: "Role" },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
// make model and export the schema
module.exports = mongoose.model("user", userSchema);
