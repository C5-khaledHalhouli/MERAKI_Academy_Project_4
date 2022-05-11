const express = require("express");

// instance the router
const categoryRouter = express.Router();
//crequires the functions
const{createNewCategory,getAllCategory,}=require("../controllers/category")
const {createNeWService,getAllServices}=require("../controllers/service")
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
categoryRouter.put("/category/service/:serviceId");
categoryRouter.put("/:categoryId");
//Delete request
categoryRouter.delete("/category/service/:serviceId");
categoryRouter.delete("/:categoryID");
categoryRouter.delete("/service/:serviceID/feedback");

module.exports = categoryRouter;
