import React, { useState } from "react";
import axios from "axios";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [country, setCountry] = useState("ireland");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // fetch a country by input name from backend:
  const fetchCountryByInput = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `http://localhost:3000/countries/name/${input}`
      );
      const data = res.data;
      console.log(data);
      setCountry(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <form
      action="/countryInfo"
      className="search-bar"
      onSubmit={fetchCountryByInput}
      method="GET"
    >
      <input
        type="text"
        placeholder="Country name"
        onChange={handleInputChange}
        value={input.toLowerCase()}
      />
      <button className="btn-search" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
