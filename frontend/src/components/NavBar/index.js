import React from 'react'
  import { Link } from 'react-router-dom'

const NavBar=()=>{

    return <>
    <h2>Title</h2>
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
    <Link to="/register">Register</Link>
    </>
}
export {NavBar}