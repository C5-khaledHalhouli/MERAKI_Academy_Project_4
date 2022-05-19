import "./style.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// create compente to show all service

const MyServices = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [services, setServices] = useState("");
  // const updateClick=(serviceId)=>{
  //     navigate(`/user/myservices/${serviceId}/update`)
  // }
  useEffect(() => {
    axios
      .get("http://localhost:5000/category/myservice", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        setServices(result.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div className="myServices">
      <h2>My Services</h2>
      {services &&
        services.map((element) => {
          return (
            <div className="Service">
              <div>
                <p className="myServiceInfo">Service:{element.title}</p>
                <p className="myServiceInfo">Cost: {element.cost}</p>
              </div>
              <button className="myServiceButton"
                onClick={() => {
                  navigate(`/user/myservices/${element._id}/update`);
                }}
              >
                Update
              </button>
              <button className="myServiceButton"
                onClick={() => {
                  axios
                    .delete(
                      `http://localhost:5000/category//service/${element._id}`,
                      {
                        headers: {
                          Authorization: `Bearer ${token}`,
                        },
                      }
                    )
                    .then((result) => {
                      console.log("delete", result);
                    })
                    .catch((err) => {
                      console.log("delete", err);
                    });
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
    </div>
  );
};
export { MyServices };
