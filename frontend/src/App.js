import "./App.css";
import React, { createContext, useState, useEffect } from "react";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/index";
import jwtDecode from "jwt-decode";
import { MainPage } from "./components/MainPage/MainPage";
import { Services } from "./components/Services/Services";
import { CreateService } from "./components/CreateService/CreateService";
import { MyServices } from "./components/MyServices";
import { Service } from "./components/Service";
import { UpdateService } from "./components/UpdateService";
import { SearchPage } from "./components/SearchPage";
import {MenuList} from "./components/MenuList/index"
// make variable of context
export const tokenContext = createContext();
function App() {
  const [result, setResult] = useState("");
  //  write stat for token and isLoggedIn
  const [isLoggedIn, setIsloggedIn] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
const [menuListStyle,setMenuListStyle]=useState("menuList")
  // check if we have token in localstorage if we have we wil save it value in token variable
  useEffect(() => {
    if (
      localStorage.getItem("token") !== null &&
      localStorage.getItem("token") !== false &&
      jwtDecode(token).exp * 1000 >= Date.now()
    ) {
      setIsloggedIn(true);
      localStorage.setItem("isLoggedIn", true);
    } else {
      setIsloggedIn(false);
      localStorage.setItem("isLoggedIn", false);
    }
  });
  return (
    <div className="App">
        <tokenContext.Provider value={{setToken,token,setIsloggedIn}}>
      <div className="navbar">
        <NavBar isLoggedIn={isLoggedIn} setResult={setResult} setMenuListStyle={setMenuListStyle} />
      </div>
      <MenuList isLoggedIn={isLoggedIn} menuListStyle={menuListStyle} setMenuListStyle={setMenuListStyle}/>
      <div className="mainPage">
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login setIsloggedIn={setIsloggedIn}/>} />
            <Route path="/" element={<MainPage />} />
            <Route
              path="/category/:categoryID/services"
              element={<Services />}
            />
            <Route path="/category/createService" element={<CreateService />} />
            {/* <Route path="/category/service/:serviceID" element={<Service/>}/> */}
            <Route path="/category/service/:serviceID" element={<Service />} />
            <Route path="/user/myServices" element={<MyServices />} />
            <Route
              path="/user/myservices/:serviceID/update"
              element={<UpdateService />}
            />
            <Route path="/search" element={<SearchPage result={result} />} />
          </Routes>
      </div>
      <div className="footer">
        <p className="footerPar">?? 2018. ALL RIGHTS RESERVED</p>
      </div>
        </tokenContext.Provider>
    </div>
  );
}

export default App;
