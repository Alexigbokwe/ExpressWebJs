const express = require("express");
const bodyParser = require("body-parser");
require("module-alias/register");
//const { scopePerRequest } = require("awilix-express");

//const container = require("./container/container");
//Requiring the routes
const userRoutes = require("./Routes/userRoutes/index");

const app = express();

// app.use(scopePerRequest(container));

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
