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
        setServices(result.data);
        
      })
      .catch((err) => {});
  }, []);
// display the services
  return (
    <div>
      {services &&
        services.map((element, index) => {
          return (
            <>
            <Link to= {`/category/service/${element._id}`} >
              <p>{element.title}</p>
              <p>{element.user}</p>
            </Link>
            </>
          );
        })}
    </div>
  );
};

export { Services };
