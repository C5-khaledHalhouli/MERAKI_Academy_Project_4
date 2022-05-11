const mongoose = require("mongoose");
 const bcrypt =require("bcrypt")
// create userSchema , it will take objact of the data that expeted and the type of data

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  birthday: { type: String, required: true },
  role: { type: mongoose.Schema.Types.ObjectId, ref: "Role" },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
//create mongose midleware to hash password before save the data in db
userSchema.pre("save",async function () {
const salt=process.env.salt
// create hashed the password function 
const hashPassword=await bcrypt.hash(this.password,+salt)
this.password=hashPassword
})


// make model and export the schema
module.exports = mongoose.model("User", userSchema);
