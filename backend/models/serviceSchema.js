const mongoose = require("mongoose");

// create serviceSchema , it will take objact of the data that expeted and the type of data.

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  description: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  cost: { type: String },
  img: { type: String },
  feedback: { type: mongoose.Schema.Types.ObjectId, ref: "Feedback" },
  country: { type: String, required: true },
  cities: [{ type: String, required: true }],
});

// make model and export the schema
module.exports = mongoose.model("Service", serviceSchema);
