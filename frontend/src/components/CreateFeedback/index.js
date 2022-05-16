import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import jwtDecode from "jwt-decode";

const CreateFeedback = () => {
  // take the token form localstorage
  const token = localStorage.getItem("token");
  // take the params from url
  const { serviceID } = useParams();
  // write state for rate , comment and user
  const [rate, setRate] = useState(1);
  const [comment, setComment] = useState("");
  const [user, setUser] = useState(jwtDecode(token)._id);

  // write function for clickSend
  const clickSend = () => {
    // use axios to send data to the back end
    console.log(user, "rate", rate);
    axios
      .post(
        `http://localhost:5000/category/service/${serviceID}/feedback`,
        {
          rate: rate,
          comment: comment,
          user: user,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <p>Rate</p>
      <select
        onChange={(e) => {
          setRate(e.target.value);
        }}
      >
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
      <p>feedback</p>
      <input
        placeholder="Feedback"
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button onClick={clickSend}>Send</button>
    </>
  );
};
export { CreateFeedback };
