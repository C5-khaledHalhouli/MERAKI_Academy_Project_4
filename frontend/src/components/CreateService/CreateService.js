import React, { useEffect, useState } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";

// write function to createservice
const createService = () => {
  // write state for each category
  const [category, setCategory] = useState("");
  const [service, setService] = useState("");
  const [description, setDescription] = useState("");
  const [cost, setCost] = useState("");
  const [user, setUser] = useState("");
  useEffect(() => {
    axios.get("http://localhost:5000/category").then((result) => {
      // change the value of category to its id in db
      result.data.data.forEach((element) => {
        if (element.name.toLowerCase() === category.toLowerCase()) {
          setCategory(element._id);
        }
      });
    });
  }, [category]);
  // create function when we click on Create Service
  const clickCreateService = () => {
    const token = localStorage.getItem("token");
    setUser(jwtDecode(token._id));
// send the req to backend with data and token
    axios
      .post(
        "http://localhost:5000/category/service",
        {
          title: service,
          category: category,
          description: description,
          user: user,
          cost: cost,
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
      <p className="ServiceInfo">Service</p>
      <input
        placeholder="Service"
        onChange={(e) => {
          setService(e.target.value);
        }}
      />
      <p>Description</p>
      <input
        placeholder="Description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <p>Category</p>
      <select
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      >
        <option>Landscape</option>
        <option>Construction</option>
        <option>Finishing</option>
        <option>Electrical maintenance</option>
        <option>Machanical maintenance</option>
        <option>Other</option>
      </select>
      <p>Cost</p>
      <input
        placeholder="20$ per m2"
        onChange={(e) => {
          setCost(e.target.value);
        }}
      />
      <button onClick={clickCreateService}>Create Service</button>
    </>
  );
};

export { createService };
