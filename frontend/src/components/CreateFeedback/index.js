import "./style.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CreateFeedback = () => {
  // take the token form localstorage
  const token = localStorage.getItem("token");
  // take the params from url
  const { serviceID } = useParams();
  // write state for rate , comment and user
  const [rate, setRate] = useState(1);
  const [comment, setComment] = useState("");


  // write function for clickSend
  const clickSend = () => {
    // use axios to send data to the back end
    axios
      .post(
        `http://localhost:5000/category/service/${serviceID}/feedback`,
        {
          rate: rate,
          comment: comment,
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
    <div id="feedbackAndRate">
      <p id="ratePar">Rate</p>
      <select id="rateSelect"
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
      <p id="rateComment">Feedback</p>
      <input id="rateCommentInput"
        placeholder="Feedback"
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button id="sendButton" onClick={clickSend}>Send</button>
    </div>
  );
};
export { CreateFeedback };
