import React, { useState } from "react";
import axios from "axios";

const SearchBar = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // fetch a country by input name from backend:
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `http://localhost:3000/countries/name/${input}`
      );
      if (res.status !== 200) throw new Error("Something went wrong.");
      const data = await res.data;
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit} method="GET">
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
