require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware to serve static files (optional, if needed)
app.use(express.static("public"));

// Define a simple route to handle a GET request
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Define another route for a different path
app.get("/about", (req, res) => {
  res.send("This is a simple Express app. working fine");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
