// import './App.css';
import React, { createContext, useState, useEffect } from "react";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/index";
import jwtDecode from "jwt-decode";
import { MainPage } from "./components/MainPage/MainPage";
// make variable of context
export const tokenContext = createContext();
function App() {
  //  write stat for token and isLoggedIn
  const [isLoggedIn, setIsloggedIn] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  // check if we have token in localstorage if we have we wil save it value in token variable
  useEffect(() => {
    if (
      localStorage.getItem("token") !== null &&
      jwtDecode(token).exp * 1000 >= Date.now()
    ) {
      setIsloggedIn(true);
      localStorage.setItem("isLoggedIn", true);
    } else {
      setIsloggedIn(false);
      localStorage.setItem("isLoggedIn", false);
    }
  }, [token]);
  return (
    <div className="App">
      <h1>Hello world</h1>
      <NavBar isLoggedIn={isLoggedIn}/>
      
      <tokenContext.Provider value={setToken}>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<MainPage/>}/>
        </Routes>
      </tokenContext.Provider>
    </div>
  );
}

export default App;
