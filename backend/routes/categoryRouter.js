const express = require("express");

// instance the router
const categoryRouter = express.Router();
//crequires the functions
const{createNewCategory,getAllCategory,}=require("../controllers/category")
const {createNeWService,getAllServices,updateOfService,deleteService}=require("../controllers/service")
const {createNeWFeedback,getAllFeedback}=require("../controllers/feedback")
//  post request
categoryRouter.post("/",createNewCategory);
categoryRouter.post("/service",createNeWService);
categoryRouter.post("/service/:serviceID/feedback",createNeWFeedback);
//get request
categoryRouter.get("/",getAllCategory);
categoryRouter.get("/service/:serviceID/feedback",getAllFeedback);
categoryRouter.get("/:categoryID/service",getAllServices);
//Put request
categoryRouter.put("/service/:serviceID",updateOfService);
//! when make admin
categoryRouter.put("/:categoryId");
//Delete request
categoryRouter.delete("/service/:serviceID",deleteService);
categoryRouter.delete("/:categoryID");
categoryRouter.delete("/service/:serviceID/feedback");

module.exports = categoryRouter;
