import "./style.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import UploadImg from "../UploadIMg";
// write function to createservice
const CreateService = () => {
  const navigate = useNavigate();
  // write state for each category
  const [category, setCategory] = useState("LandScape");
  const [service, setService] = useState("");
  const [description, setDescription] = useState("");
  const [cost, setCost] = useState("");
  const [user, setUser] = useState("");
  const [country, setCountry] = useState("Jordan");
  const [city, setCity] = useState("");
  const [countries, setCountries] = useState("");
  const [img, setImg] = useState([]);
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
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
  useEffect(() => {
    axios
      .get("https://countriesnow.space/api/v0.1/countries/capital")
      .then((result) => {
        setCountries(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // create function when we click on Create Service
  const clickCreateService = () => {
    const token = localStorage.getItem("token");
    setUser(jwtDecode(token)._id);
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
          country: country,
          cities: city,
          img: img,
          phone: phone,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((result) => {
        console.log(result);
        setMessage("The service has been added");
        navigate(-1);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  return (
    <div className="createService">
      <h1>Add your service:-</h1>
      <p className="serviceInfo">Service</p>
      <input
        placeholder="Service"
        className="serviceInput"
        onChange={(e) => {
          setService(e.target.value);
        }}
      />
      <p className="serviceInfo">phone</p>
      <input
        placeholder="0799999999"
        className="serviceInput"
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />
      <p className="serviceInfo">Description</p>
      <input
        placeholder="Description"
        id="description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <p className="serviceInfo">Category</p>
      <select
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      >
        <option>LandScape</option>
        <option>Construction</option>
        <option>Finishing</option>
        <option>Electrical maintenance</option>
        <option>Machanical maintenance</option>
        <option>Other</option>
      </select>
      <p className="serviceInfo">Cost</p>

      <input
        placeholder="20$ per m2"
        className="serviceInput"
        onChange={(e) => {
          setCost(e.target.value);
        }}
      />
      <p className="serviceInfo">Country</p>
      <input
        list="countries"
        className="serviceInput"
        placeholder="Jordan"
        onChange={(e) => {
          setCountry(e.target.value);
        }}
      />
      <datalist id="countries">
        {countries &&
          countries.map((element) => {
            return <option value={element.name}>{element.name}</option>;
          })}
      </datalist>
      <p className="serviceInfo">Cities</p>
      <input
        placeholder="amman,irbed"
        onChange={(e) => {
          setCity(e.target.value.split(","));
        }}
        className="serviceInput"
      />
      <UploadImg setImg={setImg} img={img} />
      <p className="messagePar">{message}</p>
      <button onClick={clickCreateService} className="createButton">
        Create Service
      </button>
    </div>
  );
};

export { CreateService };
