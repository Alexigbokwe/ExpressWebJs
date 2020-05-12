const express = require("express");
const app = express();

require("@providers/Route");

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  console.log(error.message);
  res.status(error.code || 500);
  res.json({ message: error.message || "An Unknown Error Occured" });
});
