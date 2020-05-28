"use strict";
const Route = use("@router");
const at = require("@controllerBox");
/*
    |--------------------------------------------------------------------------
    | Welcome route   
    |--------------------------------------------------------------------------
    |
    | Welcome To ExpressWebjs API Framework.
    |
    | 
    */

Route.get("/", (req, res) => {
  res.json({ Message: "Welcome To ExpressWebjs" });
});

module.exports = Route;
