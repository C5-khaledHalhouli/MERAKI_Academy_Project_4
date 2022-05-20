import "./style.css";
import React from "react"
import {Link} from "react-router-dom"


const SearchPage=(result)=>{
console.log(result,result!=="");

    return <>
    <p>Search</p>
    <div>
        {result.result!==""?result.result.map((element)=>{
            console.log(element.title);
            return <Link to={`/category/service/${element._id}`}>
            <p>{element.title}</p>
            <p>{element.cost}</p>
            <p>{element.user.firstName}</p>
            
            </Link>
            // return <Link>{element.title}</Link>
        }):<p>There is no match</p>}
    </div>
    </>
}

export {SearchPage} 