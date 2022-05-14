import React from 'react'


// create function Register

const Register=()=>{

  return <>
  <p className="registerInfo">First Name</p>
  <input placeholder="First Name"/>
  <p className="registerInfo">Last Name</p>
  <input placeholder="Last Name"/>
  <p className="registerInfo">Birthday</p>
  <input placeholder="Birthday"/>
  <p className="registerInfo">Country</p>
  <input placeholder="Country"/>
  <p className="registerInfo">City</p>
  <input placeholder="City"/>
  <p className="registerInfo">Email</p>
  <input placeholder="Email"/>
  <p className="registerInfo">Password</p>
  <input placeholder="Password"/>
  <p className="registerInfo">Confirm Password</p>
  <input placeholder="Confirm Password"/>
  <button>Register</button>
  </>
}


export {Register}