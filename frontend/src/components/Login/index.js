import React,{useState,useContext} from 'react'
import axios from 'axios'
import {tokenContext} from '../../App'
export const Login = () => {
 
 const {setToken}=useContext(tokenContext)
 
  // write state for email and password
const [email,setEmail]=useState("")
const[password,setPassword]=useState("")
 // write  the message will display
const [message,setMessage]=useState("")


const loginClick=()=>{
  axios.post("http://localhost:5000/login",{email:email,password:password}).then((result)=>{
    setMessage(result.data.sucess)
    localStorage.setItem("token",result.data.token)

  }).catch((err)=>{
    console.log(err);
    setMessage(err.response.data)
  })
}

  return (
    <div>Login
      <p>Email</p>
      <input onChange={(e)=>{
        console.log(e.target.value);
        setEmail(e.target.value.toLowerCase())
      }} placeholder='Email'/>
      <p>Password</p>
      <input onChange={(e)=>{
        setPassword(e.target.value)
      }}placeholder='Password'/>
      <button onClick={loginClick}>Login</button>
      <p>{message}</p>
    </div>
  )
}
