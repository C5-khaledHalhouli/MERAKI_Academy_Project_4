const roleModel=require("../models/roleSchema")



// create function to create role
// use post request
// get the data from body
// add the data to db
// return true if its sucess
// return the false if its not sucess
const createNeWRole = (req, res) => {

    const {
        role,permission
    } = req.body;
    const newRole = new roleModel({
        role,permission
    })
    
    newRole.save().then((result) => {
      res
        .status(201)
        .json({
          success: true,
          data: result,
        })
        .catch((err) => {
          res.status(500).json({
            success: false,
            message: "Server Error",
            err: err.message,
          });
        });
    });
  };
  module.exports={createNeWRole}