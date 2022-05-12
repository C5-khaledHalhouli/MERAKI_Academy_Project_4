const express = require("express");

// instance the router
const categoryRouter = express.Router();
//requires the functions
const {
  createNewCategory,
  getAllCategory,
} = require("../controllers/category");
const {
  createNeWService,
  getAllServices,
  updateOfService,
  deleteService,
} = require("../controllers/service");
const {
  createNeWFeedback,
  getAllFeedback,
} = require("../controllers/feedback");

const authentication =require("../midleware/authentication")
//  post request
categoryRouter.post("/", authentication,createNewCategory);
categoryRouter.post("/service", createNeWService);
categoryRouter.post("/service/:serviceID/feedback", createNeWFeedback);
//get request
categoryRouter.get("/", getAllCategory);
categoryRouter.get("/service/:serviceID/feedback", getAllFeedback);
categoryRouter.get("/:categoryID/service", getAllServices);
//Put request
categoryRouter.put("/service/:serviceID", updateOfService);
//! when make admin
categoryRouter.put("/:categoryId");
//Delete request
categoryRouter.delete("/service/:serviceID", deleteService);
//! when make admin
categoryRouter.delete("/:categoryID");
categoryRouter.delete("/service/:serviceID/feedback");

module.exports = categoryRouter;
