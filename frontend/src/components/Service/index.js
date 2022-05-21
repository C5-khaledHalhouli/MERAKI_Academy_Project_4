import "./style.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { CreateFeedback } from "../CreateFeedback";
import { useParams } from "react-router-dom";
// create Service compenet

const Service = () => {
  const { serviceID } = useParams();
  const [service, setService] = useState("");
  const [feedback, setFeedback] = useState("");
  const [avgRate, setAvgRate] = useState("");
  const token = localStorage.getItem("token")

  useEffect(() => {
    axios
      .get(`http://localhost:5000/category/service/${serviceID}`)
      .then((result) => {
        setService(result.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/category/service/${serviceID}/feedback`)
      .then((result) => {
        setFeedback(result.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  });
  useEffect(() => {
    setAvgRate(
      (feedback &&
        feedback.reduce((acc, element) => {
          return acc + +element.rate;
        }, 0)) / 5
    );
    axios
      .put(
        `http://localhost:5000/category/service/${serviceID}`,
        {
          avgRate:avgRate,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((result) => {
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, [feedback]);
  return (
    <div className="servicesDesAndFeedbacks">
      <dev className="serviceDes">
        <h1>{service && service.title}</h1>
        <h2 id="Rate">Rate: {avgRate}/5</h2>
        <p>
          <span>Category :</span> {service && service.category.name}
        </p>
        <p>
          <span>User:</span> {service && service.user.firstName}
        </p>
        <p>
          <span>Description:</span> {service && service.description}
        </p>
        <p>
          <span>Country:</span> {service && service.country}
        </p>
        <p>
          <span>Cities:</span>{" "}
          {service &&
            service.cities.map((element) => {
              return <p>{element}</p>;
            })}
        </p>
        <p>
          <span>Cost:</span> {service && service.cost}
        </p>
        {service&& service.img.map((element)=>{return <img className="imageService" src={element}/>  })}
      </dev>
      <div className="feedbacks">
        <h2 id="feedbackTitle">Feedbacks</h2>
        {feedback &&
          feedback.map((element) => {
            return (
              <div className="feedback">
                <p>User: {element.user.firstName}</p>
                <p>Rate: {element.rate}/5</p>
                <p>Comment: {element.comment}</p>
              </div>
            );
          })}
      </div>

      <CreateFeedback />
    </div>
  );
};

export { Service };
