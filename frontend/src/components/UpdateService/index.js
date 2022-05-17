import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// write function to updateservice
const UpdateService = () => {
  const navigate = useNavigate();
  const { serviceID } = useParams();

  // write state for each category
  const [category, setCategory] = useState("Landscape");
  const [service, setService] = useState("");
  const [description, setDescription] = useState("");
  const [cost, setCost] = useState("");
  const [country, setCountry] = useState("Jordan");
  const [city, setCity] = useState("");
  const [countries, setCountries] = useState("");
  const [cities,setCities]=useState("")
  useEffect(() => {
      axios.post("https://countriesnow.space/api/v0.1/countries/states",{
        "country": `${country}`
      }).then((result)=>{
          setCities(result.data.data.states)
      }).catch((err)=>{
          console.log(err);
      })
  }, [country]);
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
  const clickUpdateService = () => {
    const token = localStorage.getItem("token");
console.log(city);
    // send the req to backend with data and token
    axios
      .put(
        `http://localhost:5000/category/service/${serviceID}`,
        {
          title: service,
          category: category && category,
          description: description,
          cost: cost,
          country: country,
          cities: city,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((result) => {
        console.log(result);
        navigate(-1);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  return (
    <>
      {" "}
      <h2>Update</h2>
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
      <p>Country</p>
      <input
        list="countries"
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
      <p>City</p>
      <input
        placeholder="amman,irbed"
        onChange={(e) => {
          setCity((e.target.value).split(","));
        }}
      />
      <button onClick={clickUpdateService}>Update</button>

    </>
  );
};

export { UpdateService };
