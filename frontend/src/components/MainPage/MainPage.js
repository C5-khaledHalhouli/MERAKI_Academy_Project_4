import "./style.css";

import React,{useEffect,useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import img from "./assist/image/Other.jpg"

// write MainPage compenent

const MainPage=()=>{

    // write state for category
    const [category,setCategory]=useState("")
    // use useEffect to get the category when we run app
useEffect(()=>{
    // get all category by axios
    axios.get("http://localhost:5000/category").then((result)=>{
    //    save tht name of category in the category variable
        setCategory(result.data.data)
        })
        
    .catch((err)=>{
        
    })
    
},[])
// return each category and make it as link with path of categoryID
return <div id="categories">{category&&category.map((element,index)=>{
    return <div className="category">
        <img className="categoryImg" src={img}/>
        <Link className="categoryName" key={index} to={`/category/${element._id}/services`} >{element.name}</Link></div>
})}</div>
}

export {MainPage}