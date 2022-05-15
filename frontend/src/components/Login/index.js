import React,{useState,useContext} from 'react'
import axios from 'axios'
import {tokenContext} from '../../App'
import { useNavigate } from 'react-router-dom'
export const Login = () => {
  
  // create navigate 
  const navigate=useNavigate

  const {setToken}=useContext(tokenContext)
  
  // write state for email and password
  const [email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  // write  the message will display
  const [message,setMessage]=useState("")
  
  // write login click
  // it will send the data to the backend
  const loginClick=()=>{
    axios.post("http://localhost:5000/login",{email:email,password:password}).then((result)=>{
    setMessage(result.data.sucess)
    localStorage.setItem("token",result.data.token)
  }).catch((err)=>{
    console.log(err);
    setMessage(err.response.data)
    return
  })
}

  return (
    <div>Login
      <p>Email</p>
      <input onChange={(e)=>{
        console.log(e.target.value);
        setEmail(e.target.value.toLowerCase())
      }} placeholder='Email' type="email"  />
      <p>Password</p>
      <input onChange={(e)=>{
        setPassword(e.target.value)
      }}placeholder='Password' type="password"/>
      <button onClick={loginClick}>Login</button>
      <p>{message}</p>
    </div>
  )
}
