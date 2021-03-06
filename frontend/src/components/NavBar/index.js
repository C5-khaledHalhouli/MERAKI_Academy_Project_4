import "./style.css";
import { FaList } from "react-icons/fa";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search } from "../Search";
import logo from "./assist/image/logo.png";
import { Logout } from "../Logout";

const NavBar = ({ isLoggedIn, setResult,setMenuListStyle }) => {
  const clickList=()=>{
    setMenuListStyle("showMenuList")
    console.log(1111);
  }
  if (!isLoggedIn) {
    return (
      <>
        <img src={logo} className="logoImg" />
        <div className="search">
          <Search setResult={setResult} />
        </div>
        <button className="mainList" onClick={clickList}>
          <FaList />
        </button>
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
        <button className="mainList" onClick={clickList}>
          <FaList />
        </button>
      </>
    );
  }
};

export { NavBar };
