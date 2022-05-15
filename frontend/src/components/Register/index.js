import React,{useState} from 'react'
import axios from 'axios'

// create function Register

const Register=()=>{
const[firstName,setFirstName]=useState("")
const[lastName,setLastName]=useState("")
const[birthday,setBirthday]=useState("")
const[country,setCountry]=useState("")
const[city,setCity]=useState("")
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")
const [confirmPassword,setConfirmPassword]=useState("")
const [message,setMessage]=useState("")
  // make function for clickRegister
  const clickRegister=()=>{
    if(firstName.length===0 || lastName===0 || birthday.length===0|| country.length===0|| city.length===0){
      setMessage("Please fill all fields")
      return
    }
    if(password!==confirmPassword){
      setMessage("Passwords is not match")
      return
    }
    if(!email.includes("@")||!email.includes(".")){
      setMessage("Correct your email")
      return
    }
axios.post("http://localhost:5000/user",{firstName:firstName,
lastName:lastName,
birthday:birthday,
country:country,
city:city,
role:"627c04a245f880243ba905c9",
email:email,
password:password}).then((result)=>{
  console.log(result);
  setMessage("You have successfully registered")
}).catch((err)=>{
  if(err.response.data.err.includes("E11000")){
    setMessage("This email is already registed")
  }
  console.log(err);
})
  }
  return <>
  <p className="registerInfo" >First Name</p>
  <input placeholder="First Name" onChange={(e)=>{
    setFirstName(e.target.value)
  }} type="text" />
  <p className="registerInfo">Last Name</p>
  <input placeholder="Last Name" onChange={(e)=>{
    setLastName(e.target.value)
  }} type="text" />
  <p className="registerInfo">Birthday</p>
  <input placeholder="Birthday" onChange={(e)=>{
    setBirthday(e.target.value)
  }} type="date"/>
  <p className="registerInfo">Country</p>
  <input placeholder="Country" onChange={(e)=>{
    setCountry(e.target.value)
  }} type="text" />
  <p className="registerInfo">City</p>
  <input placeholder="City" onChange={(e)=>{
    setCity(e.target.value)
  }} type="text" />
  <p className="registerInfo">Email</p>
  <input placeholder="Email" onChange={(e)=>{
    setEmail(e.target.value)
  }} type="email"/>
  <p className="registerInfo">Password</p>
  <input placeholder="Password" onChange={(e)=>{
    setPassword(e.target.value)
  }} type="password"/>
  <p className="registerInfo">Confirm Password</p>
  <input placeholder="Confirm Password" onChange={(e)=>{
    setConfirmPassword(e.target.value)
  }} type="password"/>
  <p>{message}</p>
  <button onClick={clickRegister} >Register</button>
  </>
}


export {Register}