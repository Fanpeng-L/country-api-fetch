const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const axios = require("axios");
const cors = require("cors");

app.use(cors());

// fetch all countries data:
app.get("/countries", async (req, res) => {
  try {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong." });
  }
});

// fetch a single country's data:
app.get("/countries/name/:name", async (req, res) => {
  const countryName = req.params.name;
  console.log(countryName);
  try {
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch country data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
