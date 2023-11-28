import React, { useState } from "react";
import axios from "axios";

const CountryInput = () => {
  const [input, setInput] = useState("");
  const [countryData, setCountryData] = useState(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${input}`
      );
      setCountryData(response.data);
    } catch (error) {
      console.log("Error fetching country data", error);
    }
  };

  return (
    <section className="container">
      <form className="search-form" method="GET">
        <h2>Country Information</h2>
        <label htmlFor="countryName">Search for country: </label>
        <input
          type="text"
          placeholder="country name"
          id="countryName"
          value={input}
          onChange={handleInputChange}
        />
        <br />
        <button className="btn-search" onClick={fetchData}>
          Search
        </button>
        {fetchData && 
        <><h2>{JSON.stringify(countryData.name.official)}</h2><p>{JSON.stringify(countryData.capital[0]}</p></>}
      </form>
    </section>
  );
};

export default CountryInput;
