import React from "react";
import axios from "axios";


// write function to createservice
const createService=()=>{
const [category,setCategory]=use

    return <>
    <p className="ServiceInfo">Service</p>
    <input placeholder="Service"/>
    <p>Description</p>
    <input placeholder="Description"/>
    <p>Category</p>
    <select>
        <option>Landscape</option>
        <option>Construction</option>
        <option>Finishing</option>
        <option>Electrical maintenance</option>
        <option>Machanical maintenance</option>
        <option>Other</option>
    </select>
    <p>Cost</p>
    <input placeholder="20$ per m2"/>
    </>
}


export{createService}