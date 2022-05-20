import "./style.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import UploadImg from "../UploadIMg";
// create function Register

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [country, setCountry] = useState("Jordan");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [countries, setCountries] = useState("");
  const [cities, setCities] = useState("");
  useEffect(() => {
    axios
      .get("https://countriesnow.space/api/v0.1/countries/capital")
      .then((result) => {
        setCountries(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .post("https://countriesnow.space/api/v0.1/countries/states", {
        country: `${country}`,
      })
      .then((result) => {
        setCities(result.data.data.states);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [country]);
  // make function for clickRegister
  const clickRegister = () => {
    if (
      firstName.length === 0 ||
      lastName === 0 ||
      birthday.length === 0 ||
      country.length === 0 ||
      city.length === 0
    ) {
      setMessage("Please fill all fields");
      return;
    }
    if (password !== confirmPassword) {
      setMessage("Passwords is not match");
      return;
    }
    if (!email.includes("@") || !email.includes(".")) {
      setMessage("Correct your email");
      return;
    }
    axios
      .post("http://localhost:5000/user", {
        firstName: firstName,
        lastName: lastName,
        birthday: birthday,
        country: country,
        city: city,
        role: "627c04a245f880243ba905c9",
        email: email,
        password: password,
      })
      .then((result) => {
        console.log(result);
        setMessage("You have successfully registered");
      })
      .catch((err) => {
        if (err.response.data.err.includes("E11000")) {
          setMessage("This email is already registed");
        }
        console.log(err);
      });
  };
  return (
    <div className="registerPage">
      <p className="registerInfo">First Name</p>
      <input
        placeholder="First Name"
        className="registerInput"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
        type="text"
      />
      <p className="registerInfo">Last Name</p>
      <input
        className="registerInput"
        placeholder="Last Name"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
        type="text"
      />
      <p className="registerInfo">Email</p>
      <input
        className="registerInput"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type="email"
      />
      <p className="registerInfo">Password</p>
      <input
        className="registerInput"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
      />
      <p className="registerInfo">Confirm Password</p>
      <input
        className="registerInput"
        placeholder="Confirm Password"
        onChange={(e) => {
          setConfirmPassword(e.target.value);
        }}
        type="password"
      />
      <p className="registerInfo">Birthday</p>
      <input
        className="registerInput"
        placeholder="Birthday"
        onChange={(e) => {
          setBirthday(e.target.value);
        }}
        type="date"
      />
      <p className="registerInfo">Country</p>
      <input
        className="registerInput"
        placeholder="Jordan"
        onChange={(e) => {
          setCountry(e.target.value);
        }}
        type="text"
        list="countries"
      />
      <datalist id="countries">
        {countries &&
          countries.map((element) => {
            return <option value={element.name}>{element.name}</option>;
          })}
      </datalist>
      <p className="registerInfo">City</p>
      <input
        className="registerInput"
        placeholder="City"
        onChange={(e) => {
          setCity(e.target.value);
        }}
        type="text"
        list="cities"
      />
      <datalist id="cities">
        {cities &&
          cities.map((element) => {
            return <option value={element.name}>{element.name}</option>;
          })}
      </datalist>

      <p className="messageRegister">{message}</p>
      <button className="buttonRegister" onClick={clickRegister}>
        Register
      </button>
    </div>
  );
};

export { Register };
