const serviceModel = require("../models/serviceSchema");
const categoryModel = require("../models/categorySchema");

// create function to create service
// use post request
// get the data from body
// add the data to db
// return true if its sucess
// return the false if its not sucess
const createNeWService = (req, res) => {
  const {
    title,
    category,
    description,
    user,
    cost,
    img,
    feedback,
    country,
    cities,
  } = req.body;
  const newService = new serviceModel({
    title,
    category,
    description,
    user,
    cost,
    img,
    feedback,
    country,
    cities,
  });

  newService
    .save()
    .then((result) => {
      categoryModel
        .findOneAndUpdate(
          { _id: category },
          { $push: { services: result._id } },
          { returnDocument: "after" }
        )
        .then((result1) => {
          console.log(result1);
          res.status(201).json({
            success: true,
            data: result1,
          });
        })
        .catch((err) => {
          res.status(500).json({
            success: false,
            message: "Server Error",
            err: err.message,
          });
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

// create function to get all service of category
//use find to get the services
const getAllServices=(req,res)=>{
const categoryID=req.params.categoryID
categoryModel.findOne({_id:categoryID}).populate("services","-_id").then((result)=>{
  
    res.status(200).json(result.services)
}).catch((err)=>{
    res.status(404).json(result.services)
})
}
module.exports = { createNeWService,getAllServices };