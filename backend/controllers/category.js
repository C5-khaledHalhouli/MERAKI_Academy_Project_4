const res = require("express/lib/response")
const categoryModel =require("../models/categorySchema")

//create function called createNewCategory
const createNewCategory=(req,res)=>{
//get the data from body
const {name} = req.body
console.log(123);
//add the data to categoryModel
const newCategory = new categoryModel({name})

newCategory.save().then((result)=>{
res.status(201).json({  success: true,
    message: `Category created`,
    role: result,})
}).catch((err)=>{
    res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err.message,
      })
})}

module.exports= {createNewCategory}

