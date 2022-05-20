import "./style.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Search } from "../Search";
import logo from "./assist/image/logo.png";
import { Logout } from "../Logout";
const NavBar = ({ isLoggedIn, setResult }) => {
  if (!isLoggedIn) {
    return (
      <>
        <img src={logo} className="logoImg" />
        <div className="search">
          <Search setResult={setResult} />
        </div>
        <div className="homeList">
          <Link to="/" className="homeListElement">
            Home
          </Link>
          <Link to="/login" className="homeListElement">
            Login
          </Link>
          <Link to="/register" className="homeListElement">
            Register
          </Link>
        </div>
      </>
    );
  } else {
    return (
      <>
        <img src={logo} className="logoImg" />
        <div className="search">
          <Search setResult={setResult} />
        </div>
        <div className="homeList">
          <Link to="/" className="homeListElement">
            Home
          </Link>
          <Link to="/category/createService" className="homeListElement">
            Create Service
          </Link>
          <Link to={`/user/myservices`} className="homeListElement">
            My services
          </Link>
          <Logout />
        </div>
        <div className="menuList">
          <Link to="/" className="homeListElement">
            Home
          </Link>
          <Link to="/category/createService" className="homeListElement">
            Create Service2
          </Link>
          <Link to={`/user/myservices`} className="homeListElement">
            My services
          </Link>
          <Logout />
        </div>
      </>
    );
  }
};

export { NavBar };
