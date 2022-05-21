import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Logout } from "../Logout";
const MenuList = ({ isLoggedIn, menuListStyle, setMenuListStyle }) => {
  if (isLoggedIn) {
    return (
      <div
        className={menuListStyle}
        onMouseOver={() => {
          setMenuListStyle("menuList");
        }}
      >
        <Link to="/" className="menuListElement">
          Home
        </Link>
        <Link to="/category/createService" className="menuListElement">
          Create Service
        </Link>
        <Link to={`/user/myservices`} className="menuListElement">
          My services
        </Link>
        <Logout />
      </div>
    );
  } else {
    return (
      <div
        className={menuListStyle}
        onMouseOver={() => {
          setMenuListStyle("menuList");
        }}
      >
        <Link to="/" className="menuListElement">
          Home
        </Link>
        <Link to="/login" className="menuListElement">
          Login
        </Link>
        <Link to="/register" className="menuListElement">
          Register
        </Link>
      </div>
    );
  }
};
export { MenuList };
