const express = require("express");
const bodyParser = require("body-parser");

//Requiring the routes
const userRoutes = require("./Routes/userRoutes/index");

const app = express();

//Using the routes
app.use("/api/user/", userRoutes);

//this error handling middleware must be at the last section
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An Unknown Error Occured" });
});

app.listen(5000);
