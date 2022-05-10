const express = require("express");

// instance router
const roleRouter = express.Router();
//post request
roleRouter.post("");
//delete request
roleRouter.delete("/:roleID");
//put request
roleRouter.put("/:roleId");

module.exports = roleRouter;
