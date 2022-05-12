const express =require("express")
const jwt =require("jsonwebtoken")
//create function called authentication
//the function will verify the token
//take the token from header authorization
const authentication=(req,res,next)=>{
let token=req.headers.authorization
console.log("token", token,token!==undefined);
if(token!==undefined){
token=token.split(" ")[1]
console.log("tokeeeeeeeeeeen");
    jwt.verify(token,process.env.Secret,(err,result)=>{
        console.log("result",result)
        console.log("err",err);;
        next()
    })
}else{
    res.status(403).json({
        success: false,
message: "The token is invalid or expired"
    })
}
res.status(403).json({
    success: false,
message: "Forbidden"
})




}
module.exports=authentication