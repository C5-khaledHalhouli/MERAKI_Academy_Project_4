import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// create compente to show all service

const MyServices=()=>{
    const navigate=useNavigate()
    const token=localStorage.getItem("token")
    const[services,setServices]=useState("")
    // const updateClick=(serviceId)=>{
    //     navigate(`/user/myservices/${serviceId}/update`)
    // }
useEffect(()=>{
    axios.get("http://localhost:5000/category/myservice",{
        headers: {
          Authorization: `Bearer ${token}`,
        }}).then((result)=>{
        
        setServices(result.data.result)
    }).catch((err)=>{
        console.log(err);
    })
})
    return <>
    {services&&services.map((element)=>{
return <><p>{element.title}</p>
<button onClick={
()=>{
    navigate(`/user/myservices/${element._id}/update`)
}}>update</button>
<button onClick={()=>{
axios.delete(`http://localhost:5000/category//service/${element._id}`,{
    headers: {
      Authorization: `Bearer ${token}`,
    }}).then((result)=>{
    console.log("delete",result);
}).catch((err)=>{
    console.log("delete",err);
})
}}>Delete</button>
</>
    })}
    </>
}
export {MyServices}