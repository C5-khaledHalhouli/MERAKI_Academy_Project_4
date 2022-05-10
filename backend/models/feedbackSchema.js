const mongoose = require("mongoose");

// create feedbackSchema , it will take objact of the data that expeted and the type of data.

const feedbackSchema = new mongoose.Schema({
  rate: { type: Number, min: 1, max: 5, required: true },
  Comment: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

// make model and export the schema
module.exports = mongoose.model("role", roleSchema);
