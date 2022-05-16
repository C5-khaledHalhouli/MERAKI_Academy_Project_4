import React, { useEffect, useState } from "react";
import axios from "axios";

// create compente to show all service

const MyServices=()=>{
    const token=localStorage.getItem("token")
    const[services,setServices]=useState("")
useEffect(()=>{
    axios.get("http://localhost:5000/category/myservice",{
        headers: {
          Authorization: `Bearer ${token}`,
        }}).then((result)=>{
        console.log(result)
        ;
        setServices(result.data.result)
    }).catch((err)=>{
        console.log(err);
    })
},[])
    return <>
    {services&&services.map((element)=>{
return <><p>{element.title}</p>
<button>update</button>
<button>delete</button>
</>
    })}
    </>
}
export {MyServices}