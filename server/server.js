require("dotenv").config();
// const path = require("path");
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT;

app.use(cors());
// app.use(express.static(path.join(__dirname, "../client/assets")));

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
