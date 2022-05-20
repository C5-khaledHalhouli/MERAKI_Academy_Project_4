import "./style.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

// write function services to display all services in the category

const Services = () => {
  // get the params form url
  const { categoryID } = useParams();
//   write state of services
  const [services, setServices] = useState("");
//   write useEffict hook to display the services when we open the category
  useEffect(() => {
    //   get the services by axios
    axios
      .get(`http://localhost:5000/category/${categoryID}/service`)
      .then((result) => {
        console.log(result.data);
        setServices(result.data);
        
      })
      .catch((err) => {});
  }, []);
// display the services
  return (
    <div className="services">
      <div className="service">
      {services &&
        services.map((element, index) => {
          return (
            <>
            <Link to= {`/category/service/${element._id}`} className="serviceLink" >
              <div>
              <p className="serviceInfo">Service:{element.title} </p>
              <p className="serviceInfo">User:{element.user.firstName} </p>
              <p className="serviceInfo">Cities: {element.cities.join(",")}</p>
              <p className="serviceInfo">
                Rate: 
              </p>

              </div>
              <p className="serviceInfo">Cost: {element.cost} </p>
            </Link>
            </>
          );
        })}
        </div>
    </div>
  );
};

export { Services };
