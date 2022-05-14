// import './App.css';
import React, { createContext,useState,useEffect } from "react";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/index";
// make variable of context
   export const tokenContext = createContext();
function App() {
//  write stat for token and isLoggedIn
const [isLoggedIn,setIsloggedIn]=useState(false)
  const [token, setToken] = useState(localStorage.getItem("token"));
  // check if we have token in localstorage if we have we wil save it value in token variable
  useEffect(()=>{

    if (localStorage.getItem("token")!==null) {
    }
  }

  ,[])
  return (
    <div className="App">
      <h1>Hello world</h1>
      <NavBar />
      <tokenContext.Provider value={setToken}>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </tokenContext.Provider>
    </div>
  );
}

export default App;
