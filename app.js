const express = require("express");
const bodyParser = require("body-parser");
require("module-alias/register");
require("@config/database");
require("@path/path");
const Cors = new (require("@cors"))();

//Requiring the routes
const userRoutes = require("./Routes/userRoutes/index");

const app = express();

app.use((req, res, next) => {
  Cors.handle(req, res, next);
});

//Using the routes
app.use("/api/user/", userRoutes);

//error handling middleware must be at the last section
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  console.log(error.message);
  res.status(error.code || 500);
  res.json({ message: error.message || "An Unknown Error Occured" });
});

app.listen(5000);
