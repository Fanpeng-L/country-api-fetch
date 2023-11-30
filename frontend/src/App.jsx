import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CountryInfo from "./pages/CountryInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countryInfo" element={<CountryInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
