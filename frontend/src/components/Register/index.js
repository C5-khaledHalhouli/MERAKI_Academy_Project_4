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
  // make function for clickRegister
  const clickRegister=()=>{
axios.post("http://localhost:5000/user",{firstName:firstName,
lastName:lastName,
birthday:birthday,
country:country,
city:city,
role:"627c04a245f880243ba905c9",
email:email,
password:password}).then((result)=>{
  console.log(result);
}).catch((err)=>{
  console.log(err);
})
  }
  return <>
  <p className="registerInfo" >First Name</p>
  <input placeholder="First Name" onChange={(e)=>{
    setFirstName(e.target.value)
  }}/>
  <p className="registerInfo">Last Name</p>
  <input placeholder="Last Name" onChange={(e)=>{
    setLastName(e.target.value)
  }}/>
  <p className="registerInfo">Birthday</p>
  <input placeholder="Birthday" onChange={(e)=>{
    setBirthday(e.target.value)
  }} />
  <p className="registerInfo">Country</p>
  <input placeholder="Country" onChange={(e)=>{
    setCountry(e.target.value)
  }}/>
  <p className="registerInfo">City</p>
  <input placeholder="City" onChange={(e)=>{
    setCity(e.target.value)
  }}/>
  <p className="registerInfo">Email</p>
  <input placeholder="Email" onChange={(e)=>{
    setEmail(e.target.value)
  }}/>
  <p className="registerInfo">Password</p>
  <input placeholder="Password" onChange={(e)=>{
    setPassword(e.target.value)
  }}/>
  <p className="registerInfo">Confirm Password</p>
  <input placeholder="Confirm Password"/>
  <button onClick={clickRegister}>Register</button>
  </>
}


export {Register}