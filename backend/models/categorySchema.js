const mongoose = require("mongoose");

// create categorySchema , it will take objact of the data that expeted and the type of data.

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
});
// make model and export the schema
module.exports = mongoose.model("category", categorySchema);
