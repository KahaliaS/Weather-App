require("dotenv").config();

const path = require("path");
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
const weatherRoute = require("../server/routes/openWeather.js");

app.use(express.static(path.join(__dirname, "../client")));
app.use(cors());

// middleware
app.use(express.json());
app.use((req, res, next) => {
  //Delete this console.log()
  console.log(req.path, req.method);
  next();
});

//routes
app.get("/", (req, res) => {
  return res
    .status(200)
    .sendFile(path.resolve(__dirname, "../client/pages/index.html"));
});

//weather routes
// app.use("/api/weather", weatherRoute);

/**
 * Error Handler
 */

app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

const listening = () => {
  console.log(`Server listening at port ${PORT}.`);
};

app.listen(PORT, listening);

module.exports = app;
