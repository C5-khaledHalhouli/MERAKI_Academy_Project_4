const express = require("express");
const{createNeWRole}=require("../controllers/role")

// instance router
const roleRouter = express.Router();
//post request
roleRouter.post("",createNeWRole);
//delete request
roleRouter.delete("/:roleID");
//put request
roleRouter.put("/:roleId");

module.exports = roleRouter;
