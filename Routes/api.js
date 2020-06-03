"use strict";
const { Route, at } = require("@router");
//const at = require("@controllerBox");
/*
    |--------------------------------------------------------------------------
    | Api route   
    |--------------------------------------------------------------------------
    |
    | Here is where you can register your application routes. These
    | routes are loaded by the RouteProvider. Now create something great!
    |
*/

Route.get("/", (req, res) => {
  res.json({ Message: "Welcome To ExpressWebjs" });
});

module.exports = Route;
