import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AllCountries.css";
import Navbar from "../Navbar/Navbar";
import { URL } from "../../App";

const AllCountries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  //fetch all countries' data from backend:
  const showAllCountries = async () => {
    try {
      const res = await axios.get(`${URL}/countries`);
      if (res.status !== 200) throw new Error("Something went wrong.");
      const data = await res.data;
      console.log(data);
      setCountries(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    showAllCountries();
  }, []);

  return (
    <div className="all-country-container">
      <Navbar />
      {isLoading && !error && <h3>Loading all the country info...</h3>}
      {error && !isLoading && <h3>Something went wrong</h3>}
      {countries?.map((country) => (
        <div key={countries.indexOf(country)} className="country-card">
          <div className="country-img">
            <img src={country.flags.png} alt={country.name.common} />
          </div>
          <div className="country-data">
            <h3>{country.name.common}</h3>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllCountries;
