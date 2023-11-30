import AllCountries from "./components/AllCountries/AllCountries";
import DisplayCountry from "./components/DisplayCountry";
import SearchBar from "./components/SearchBar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <nav className="navbar">
        <h1>Show the countries</h1>
        <div className="container">
          <SearchBar />
        </div>
      </nav>

      <main className="main-container">
        <Routes>
          <Route path="/" element={<AllCountries />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
