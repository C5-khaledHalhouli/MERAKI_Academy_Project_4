const express= require("express")
const{createNeWUser}=require("../controllers/user")
// instance router

const userRouter=express.Router()
// post request
userRouter.post("",createNeWUser)
//put request
userRouter.put("/:userID")




module.exports= userRouter