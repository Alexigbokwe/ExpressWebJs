//Require routes path
const welcomeRoute = require("@route/welcomeRoute");

//Use routes
serverApp.use("/api/", welcomeRoute);
