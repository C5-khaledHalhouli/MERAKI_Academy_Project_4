const express = require("express");

// instance the router
const categoryRouter = express.Router();
//crequires the functions
const{createNewCategory}=require("../controllers/category")

//  post request
categoryRouter.post("/",createNewCategory);
//!----- check the path add categorID params
categoryRouter.post("/service");
categoryRouter.post("/service/:serviceID/feedback");
//get request
categoryRouter.get("/");
categoryRouter.get("/service/:serviceID/feedback");
categoryRouter.get("/:categoryId/service");
//Put request
categoryRouter.put("/category/service/:serviceId");
categoryRouter.put("/:categoryId");
//Delete request
categoryRouter.delete("/category/service/:serviceId");
categoryRouter.delete("/:categoryID");
categoryRouter.delete("/service/:serviceID/feedback");

module.exports = categoryRouter;
