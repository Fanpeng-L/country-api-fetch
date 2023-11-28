const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/countries/:name", async (req, res) => {
  const countryName = req.params.name;
  try {
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${countryName}`
    );
    const country = response.data;
    res.json(country);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch country data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
