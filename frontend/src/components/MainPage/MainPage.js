import React,{useEffect} from "react";
import axios from "axios";


// write MainPage compenent

const MainPage=()=>{
useEffect(()=>{
    axios.get("http://localhost:5000/category").then((result)=>{
        console.log(result);
        // let namecategory=result.data.data.map((element,index)=>{
        //     return<p>{element.name}</p>
        // })
        // return <p>{namecategory}</p>

    }).catch((err)=>{
console.log(err);
    })

},[])
}

export {MainPage}