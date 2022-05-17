import React, { useState, useEffect } from "react";
import axios from "axios";

// create function to search by service(component)

const Search = (setResult) => {
  const [services, setServices] = useState("");
  const [search, setSearch] = useState("");
  
  useEffect(() => {
    axios
      .get("http://localhost:5000/category/services")
      .then((result) => {
        setServices(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const searchClick = () => {
      const servicesName= services&&services.map((element)=>{
          let check=0
          for(let i=0;i<search.length;i++){
if(search[i]===element.title[i]){
    check +=1
}
          }
          if(check/search.length>=0.7){

              return element.title
          }
      })
    //   const result =servicesName.filter((element)=>{
    //       return element
    //   })
      setResult(servicesName.filter((element)=>{
        return element
    }))
      console.log(servicesName);
  };
  return (
    <>
      <input
        placeholder="search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button on onClick={searchClick}>search</button>
    </>
  );
};
export { Search };
