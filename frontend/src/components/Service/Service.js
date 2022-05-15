import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

// write function Service to display all service in the category

const Service = () => {
  // get the params form url
  const { categoryID } = useParams();
//   write state of service
  const [service, setService] = useState("");
//   write useEffict hook to display the service when we open the category
  useEffect(() => {
    //   get the service by axios
    axios
      .get(`http://localhost:5000/category/${categoryID}/service`)
      .then((result) => {
        console.log(result);
        setService(result.data);
      })
      .catch((err) => {});
  }, []);
// display the services
  return (
    <div>
      {service &&
        service.map((element, index) => {
          return (
            <>
              <p>{element.title}</p>
              <p>{element.user}</p>
            </>
          );
        })}
    </div>
  );
};

export { Service };
