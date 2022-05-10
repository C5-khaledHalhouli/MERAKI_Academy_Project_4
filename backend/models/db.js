// require the mangose DB
const mongoose = require("mongoose");
//require dotenv
require("dotenv").config();

//make connect between js and mangodb

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("DB is connected");
  })
  .catch((err) => {
    console.log(err);
  });
