import "./style.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { CreateFeedback } from "../CreateFeedback";
import { useParams } from "react-router-dom";
// create Service compenet

const Service =()=>{
    const {serviceID}=useParams()
    const [service,setService]=useState("")
    const [feedback,setFeedback]=useState("")
useEffect(()=>{
    axios.get(`http://localhost:5000/category/service/${serviceID}`).then((result)=>{
        setService(result.data.result)
    }).catch((err)=>{
        console.log(err);
    })
},[])
useEffect(()=>{
    axios.get(`http://localhost:5000/category/service/${serviceID}/feedback`).then((result)=>{
    setFeedback(result.data)
    }).catch((err)=>{
        console.log("err",err);
    })


})
    return<div className="serviceDes">
        <dev>
    <h2>{service&&service.title}</h2>
    <p>Category :{service&&service.category.name}</p>
    <p>User:{service&&service.user.firstName}</p>
    <p>Description:{service&&service.description}</p>
    <p>Country:{service&&service.country}</p>
    <p>City: {service&&service.cities.map((element)=>{return <p>{element}</p> })}</p>
    <p>Cost:{service&&service.cost}</p>


        </dev>
   <div className="feedbacks">
    {feedback&&feedback.map((element)=>{
        return <div className="feedback">
        <p>{element.user.firstName}</p>
        <p>{element.rate}</p>
        <p>{element.comment}</p>
        <p>-------------------</p>
        </div>
    })}
       </div> 

    <CreateFeedback/>
    </div>
}

export {Service}