const mongoose = require("mongoose");

// create serviceSchema , it will take objact of the data that expeted and the type of data.

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "category" },
  description: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId },
  cost: { type: String },
  img: { type: Buffer },
  feedback: { type: mongoose.Schema.Types.ObjectId, ref: "feedback" },
  country: { type: String, required: true },
  cities: [{ type: String, required:true }],
});

// make model and export the schema
module.exports = mongoose.model("Service", serviceSchema);
