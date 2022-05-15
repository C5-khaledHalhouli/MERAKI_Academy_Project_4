import React from 'react'
  import { Link } from 'react-router-dom'

const NavBar=(isLoggedIn)=>{
if(!isLoggedIn.isLoggedIn){
    return <>
    <h2>Title</h2>
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
    <Link to="/register">Register</Link>
    </>


}else{
  return <>
  <h2>Title</h2>
  <Link to="/">Home</Link>
  </>
}
}
export {NavBar}