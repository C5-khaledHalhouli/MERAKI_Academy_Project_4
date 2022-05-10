const mongoose = require("mongoose");

// create roleSchema , it will take objact of the data that expeted and the type of data.

const roleSchema = new mongoose.Schema({
  role: { type: String, required: true, unique: true },
  permission: [{ type: String, required: true }],
});
// make model and export the schema
module.exports = mongoose.model("role", roleSchema);
