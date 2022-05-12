const express = require("express");
const jwt = require("jsonwebtoken");
//create function called authentication
//the function will verify the token
//take the token from header authorization
const authentication = (req, res, next) => {
  if (req.headers.authorization === undefined) {
    res.status(403).json({
      success: false,
      message: "Forbidden",
    });
  }
  const token = req.headers.authorization.split(" ")[1];

  jwt.verify(token, process.env.Secret, (err, result) => {
    if (err) {
      res.status(403).json({
        success: false,
        message: "The token is invalid or expired",
      });
    }
    next();
  });
};
module.exports = authentication;
