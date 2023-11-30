import React from "react";
import SearchBar from "./SearchBar";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="home-button">
        <h1>🌏 Search for countries</h1>
      </Link>
      <div className="searchbar-container">
        <SearchBar />
      </div>
    </nav>
  );
};

export default Navbar;
