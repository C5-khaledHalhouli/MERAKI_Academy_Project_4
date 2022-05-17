import React, { useEffect } from 'react'
  import { Link } from 'react-router-dom'
 import { Search } from '../Search'
  const NavBar=({isLoggedIn,setResult})=>{
   
    if(!isLoggedIn.isLoggedIn){
    return <>
    <h2>Title</h2>
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
    <Link to="/register">Register</Link>
    <Search setResult={setResult}/>
    </>


}else{
  return <>
  <h2>Title</h2>
  <Link to="/">Home</Link>
  <Link to="/category/createService">Create Service</Link>
  <Link to={`/user/myservices`}>My services</Link>
  <Search setResult={setResult}/>
  </>
}
}

export {NavBar}