import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
// create function to search by service(component)

const Search = ({ setResult }) => {
  const navigate = useNavigate();
  const [services, setServices] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/category/services")
      .then((result) => {
        setServices(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const searchClick = () => {
    const servicesName =
      services &&
      services.map((element) => {
        let check = 0;
        let check2 = 0;
        for (let i = 0; i < search.length; i++) {
          if (search[i] === element.title[i]) {
            check += 1;
          }
        }
        if (check / search.length >= 0.7) {
          return element;
        }
        const searchArry = search.split(" ");

        for (let i = 0; i <= searchArry.length - 1; i++) {
          if (element.title.includes(searchArry[i])) {
            return element;
          }
        }
      });
    setResult(
      servicesName.filter((element) => {
        return element;
      })
    );

    console.log(servicesName);
  };
  return (
    <>
      <input
        placeholder="search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <Link to="/search">
        <button on onClick={searchClick}>
          search
        </button>
      </Link>
    </>
  );
};
export { Search };
