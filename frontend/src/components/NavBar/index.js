import "./style.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Search } from "../Search";
const NavBar = ({ isLoggedIn, setResult }) => {
  console.log(isLoggedIn);
  if (!isLoggedIn) {
    return (
      <>
        <h2 className="title">Title</h2>
        <div className="search">
          <Search setResult={setResult} />
        </div>
        <div className="homeList">
          <Link to="/" className="homeListElement">Home</Link>
          <Link to="/login" className="homeListElement">Login</Link>
          <Link to="/register" className="homeListElement">Register</Link>
        </div>
      </>
    );
  } else {
    console.log(true);
    return (
      <>
      
      
        <h2 className="title">Title</h2>
        <div className="search">
          <Search setResult={setResult} />
        </div>
        <div className="homeList">
          <Link to="/" className="homeListElement">Home</Link>
          <Link to="/category/createService" className="homeListElement">Create Service</Link>
          <Link to={`/user/myservices`} className="homeListElement">My services</Link>
        </div>
        </>
    );
  }
};

export { NavBar };
