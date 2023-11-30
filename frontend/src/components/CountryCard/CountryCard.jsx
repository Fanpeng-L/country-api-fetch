import React, { useEffect, useState } from "react";
import "./CountryCard.css";
import axios from "axios";

const CountryCard = () => {
  const [country, setCountry] = useState({
    name: { common: "" },
    flags: { png: "" },
    capital: "",
    region: "",
    timezones: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [input, setInput] = useState("ireland");

  //fetch a country's data from backend:
  const fetchCountry = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/countries/name/${input}?fullText=true`
      );
      const data = res.data[0];
      console.log(data);
      setCountry(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchCountry(); // Initial data fetch on component mount
  }, []);

  return (
    <main className="country-card-container">
      <div className="country-card-search">
        <input
          type="text"
          placeholder="search country..."
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => fetchCountry()}>search</button>
      </div>
      <div className="country-card-content">
        {isLoading && !error && <h3>Loading the country info...</h3>}
        {error && !isLoading && <h3>{error}</h3>}
        <div>
          <h1 className="country-card-title">{country.name.common}</h1>
          <img src={country.flags.png} alt={country.name.common} />
        </div>
        <div className="country-card-info">
          {!isLoading && !error && (
            <>
              <p>Capital: {country.capital} </p>
              <p>Region: {country.region}</p>
              <p>Timezone: {country.timezones[0]}</p>
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default CountryCard;
