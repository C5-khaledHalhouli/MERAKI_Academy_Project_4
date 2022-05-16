const serviceModel = require("../models/serviceSchema");
const categoryModel = require("../models/categorySchema");
const usersModel=require("../models/userSchema");
const { populate } = require("../models/userSchema");

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
        usersModel.findOneAndUpdate(
          { _id: user },
          { $push: { services: result._id } },
          { returnDocument: "after" }
        )
        .then((result1) => {
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
const getAllServices = (req, res) => {
  const categoryID = req.params.categoryID;
  categoryModel
    .findOne({ _id: categoryID })
    .populate("services")
    .then((result) => {
      res.status(200).json(result.services);
    })
    .catch((err) => {
      res.status(404).json({
        success: false,
        message: "Server Error",
        err: err.message,
      });
    });
};
// create function to update the date in service
// use findoneandupdate to get the data from db and update it
// get serviceId by params
// get the data from the body
const updateOfService = (req, res) => {
  const serviceID = req.params.serviceID;
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
  serviceModel
    .findOneAndUpdate(
      { _id: serviceID },
      {
        title,
        category,
        description,
        user,
        cost,
        img,
        feedback,
        country,
        cities,
      },
      { returnDocument: "after" }
    )
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server Error",
        err: err.message,
      });
    });
};
// create function to delete service
// get the serviceId by params
// use findoneanddelete to delete service
// responce the delete service
const deleteService=(req,res)=>{
    const serviceID=req.params.serviceID
    serviceModel.findOneAndDelete({_id:serviceID}).then((result)=>{
        res.status(200).json(result)
    }).catch((err)=>{
        res.status(500).json(err.message)
    })
}
// Create function to get service by Id
const serviceById =(req,res)=>{
  const serviceID=req.params.serviceID
  serviceModel.findOne({_id:serviceID}).populate("category",("name-_id")).populate("user","firstName -_id").then((result)=>{
    res.status(200).json({success:true,result:result})
  }).catch((err)=>{
    res.status(500).json({success:false,err:err})
  })
}
module.exports = { createNeWService, getAllServices,updateOfService,deleteService,serviceById };
