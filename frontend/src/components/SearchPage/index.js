import "./style.css";

import React from "react"
import {Link} from "react-router-dom"


const SearchPage=(result)=>{


    return <div className="searchPage">
    <p className="searchTitle">Search</p>
    <div>
        {result.result!==""?result.result.map((element)=>{
            
             
            return <div className="searchServices">
            <Link to= {`/category/service/${element._id}`} className="serviceLink" >
              <div>
                <img src={element.img[0]} className="serviceImg"/>
              </div>
              <div>
              <p className="serviceInfo2"><span>Service: </span>{element.title} </p>
              <p className="serviceInfo2"><span>User: </span>{element.user.firstName} </p>
              <p className="serviceInfo2"><span>Cities: </span>{element.cities.join(",")}</p>
              <p className="serviceInfo2"><span>Rate: </span>
                 
              </p>

              </div>
              <p className="serviceInfo2"><span>Cost: </span> {element.cost} </p>
            </Link>
            </div>
            
        }):<p className="searchPar">There is no match</p>}
    </div>
    </div>
}

export {SearchPage} 