const express = require("express");

// instance the router
const loginRouter = express.Router();
const { login } = require("../controllers/login.js");
// post req
loginRouter.post("/", login);

module.exports = loginRouter;
