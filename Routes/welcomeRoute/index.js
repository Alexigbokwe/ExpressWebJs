"use strict";
const Route = use("@router");
/*
    |--------------------------------------------------------------------------
    | Welcome route   
    |--------------------------------------------------------------------------
    |
    | Welcome to expresswebjs API framework that is very fast and scalable.
    |
    | 
    */

Route.get("/", (req, res) => {
  res.json({ Message: "Welcome To ExpressWebjs" });
});

module.exports = Route;
