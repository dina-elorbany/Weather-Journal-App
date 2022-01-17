// Setup empty JS object to act as endpoint for all routes
weatherData = {};

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/*---------- Middleware ----------*/

//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

// Setup Server
const port = 8000;
const hostname = "localhost" || "127.0.0.1";
// ##Note: Callback written inside directly cause it won't be used again
app.listen(port, () =>
  console.log(`Server is running on http://${hostname}:${port}`)
);

// ##Note: Callbacks comes before Routes because Arrow function doesn't support hoisting

// Callback function to complete GET '/all'
const getWeatherData = (_, response) => {
  console.log(weatherData);
  response.send(weatherData);
};
// GET Route
app.get("/all", getWeatherData);

// Callback function to complete POST '/add'
const postWeatherData = (request, response) => {
  weatherData = request.body;
  console.log(weatherData);
  response.send(weatherData);
};

// POST Route
app.post("/add", postWeatherData);
