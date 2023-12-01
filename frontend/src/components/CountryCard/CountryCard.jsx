import React, { useEffect, useState } from "react";
import "./CountryCard.css";
import axios from "axios";
import { URL } from "../../App";

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

  const handleInputChange = (e) => {
    setInput(e.target.value.toLowerCase());
  };

  //fetch a country's data from backend:
  const fetchCountry = async () => {
    try {
      const res = await axios.get(
        `${URL}/countries/name/${input}?fullText=true`
      );
      const data = res.data[0];
      console.log(data);
      setCountry(data);
      setIsLoading(false);
      setError("");
    } catch (error) {
      setIsLoading(false);
      setError("Fail to search for the country 😢");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchCountry();
    e.target.reset();
  };

  useEffect(() => {
    fetchCountry();
  }, []);

  return (
    <main className="country-card-container">
      <form className="country-card-search" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search country..."
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
      <div className="country-card-content">
        {isLoading && !error && <h3>Loading the country info...</h3>}
        {error && !isLoading && <h3>{error}</h3>}
        <div>
          {!isLoading && !error && (
            <div className="country-card-info">
              <div>
                <h1 className="country-card-title">{country.name.common}</h1>
                <img src={country.flags.png} alt={country.name.common} />
              </div>
              <div>
                <p>
                  <span>Capital: </span>
                  {country.capital}{" "}
                </p>
                <p>
                  <span>Region: </span>
                  {country.region}
                </p>
                <p>
                  <span>Timezone: </span>
                  {country.timezones[0]}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default CountryCard;
