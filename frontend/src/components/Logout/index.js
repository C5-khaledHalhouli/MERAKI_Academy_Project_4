import "./style.css";
import React from "react";



const Logout=()=>{
    const logoutClick=()=>{
localStorage.setItem("isLoggedIn",false)
localStorage.removeItem("token")
    }

    return <p className="logout" onClick={logoutClick}>Logout</p>
}
export {Logout}