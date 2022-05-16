import React, { useEffect, useState } from "react";
import axios from "axios";
import { CreateFeedback } from "../CreateFeedback";
import { useParams } from "react-router-dom";
// create Service compenet

const Service =()=>{
    const {serviceID}=useParams()
    const [service,setService]=useState("")
    const [feedback]
useEffect(()=>{
    axios.get(`http://localhost:5000/category/service/${serviceID}`).then((result)=>{
        setService(result.data.result)
        console.log(service.user.firstName);
        
    }).catch((err)=>{
        console.log(err);
    })
},[])
    return<>
    <h2>{service.title}</h2>
    <p>Category :{service.category.name}</p>
    <p>User:{service.user.firstName}</p>
    <p>Description:{service.description}</p>
    <p>Country:{service.country}</p>
    <p>City: {service&&service.cities.map((element)=>{return <p>{element}</p> })}</p>
    <p>Cost:{service.cost}</p>
    

    <CreateFeedback/>
    </>
}

export {Service}