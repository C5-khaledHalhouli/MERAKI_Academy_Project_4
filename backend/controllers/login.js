const express = require("express");
const res = require("express/lib/response");
const jwt = require("jsonwebtoken");
const usersModel = require("../models/userSchema");
const bcrypt = require("bcrypt");
//create login function
//take the data (email,password) from body
//check if the email exist
//check the password of the email
//if its all correct create token and return the token and sucess message
//if the password wrong return password is not  correct
// /if the email wronge return the email is not excite

const login = (req, res) => {
  const { email, password } = req.body;
  usersModel
    .findOne({ email: email })
    .then((result) => {
      if (!result) {
        res.status(401).json("email is not exict");
      }else{

          bcrypt.compare(password, result.password, (err, result1) => {
            if (result1) {
                const payload={role:result.role,firstName:result.firstName,lastName:result.lastName,country:result.country,city:result.city,email:result.email}
                
                const token=jwt.sign(payload,process.env.Secret,{expiresIn:"2h"})

              res.status(200).json(token);
            } else {
              res.status(401).json("password is not correct");
            }
          });
      }
      
    })
    .catch();
};

module.exports = { login };
