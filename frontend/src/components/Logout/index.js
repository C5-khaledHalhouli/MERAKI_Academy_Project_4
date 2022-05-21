import "./style.css";
import React,{useContext} from "react";
import {tokenContext} from '../../App'


const Logout=()=>{
 const {setToken,setIsloggedIn}=useContext(tokenContext)
    const logoutClick=()=>{
localStorage.setItem("isLoggedIn",false)
setIsloggedIn(false)
localStorage.removeItem("token")
setToken("")
    }

    return <p className="logout" onClick={logoutClick}>Logout</p>
}
export {Logout}