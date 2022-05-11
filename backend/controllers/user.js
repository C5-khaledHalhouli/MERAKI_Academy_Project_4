const usersModel = require("../models/userSchema");

// create function to create user
// use post request
// get the data from body
// add the data to db
// return true if its sucess
// return the false if its not sucess
const createNeWUser = (req, res) => {
  const {
    firstName,
    lastName,
    birthday,
    country,
    city,
    role,
    email,
    password,
  } = req.body;
  const newUser = new usersModel({
    firstName,
    lastName,
    birthday,
    country,
    city,
    role,
    email,
    password,
  });

  newUser
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        data: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server Error",
        err: err.message,
      });
    });
};
module.exports = { createNeWUser };
