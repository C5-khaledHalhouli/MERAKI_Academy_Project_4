const feedbackModel = require("../models/feedbackSchema");
const serviceModel = require("../models/serviceSchema");

// create function to create feedback
// use post request
// get the data from body
// get serviceId from params
// add the data to db
// add the id of feedback to service
// return true if its sucess
// return the false if its not sucess
const createNeWFeedback = (req, res) => {
  const serviceID = req.params.serviceID;
  console.log(serviceID);
  const { rate, Comment, user } = req.body;
  const newFeedback = new feedbackModel({
    rate,
    Comment,
    user,
  });

  newFeedback
    .save()
    .then((result) => {
      serviceModel
        .findOneAndUpdate(
          { _id: serviceID },
          { $push: { feedback: result._id } },
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
module.exports = { createNeWFeedback };