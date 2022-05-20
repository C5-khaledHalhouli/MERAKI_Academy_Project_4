const categoryModel = require("../models/categorySchema");

//create function called createNewCategory
const createNewCategory = (req, res) => {
  //get the data from body
  const { name, img } = req.body;

  //add the data to categoryModel
  const newCategory = new categoryModel({ name, img });

  newCategory
    .save()
    .then((result) => {
      res
        .status(201)
        .json({ success: true, message: `Category created`, role: result });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      });
    });
};
// create function to get all category
// and will return the data
//  use the find to get the data from DB
const getAllCategory = (req, res) => {
  categoryModel
    .find({})
    .then((result) => {
      res.status(200).json({
        success: true,
        data: result,
      });
    })
    .catch((err) => {
      err.status(500).json({
        success: false,
        message: "Server Error",
        err: err.message,
      });
    });
};
module.exports = { createNewCategory, getAllCategory };
