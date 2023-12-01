import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>🌏 Search for countries</h1>
      <div className="links">
        <Link to="/">Search</Link>
        <Link to="/countries">All Countries</Link>
      </div>
    </nav>
  );
};

export default Navbar;
