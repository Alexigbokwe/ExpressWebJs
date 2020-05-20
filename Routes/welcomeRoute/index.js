"use strict";
const express = require("express");
const Route = express.Router();
/*
    |--------------------------------------------------------------------------
    | Welcome route   
    |--------------------------------------------------------------------------
    |
    | Welcome to expresswebjs API framework that is very fast and scalable.
    |
    | 
    */

Route.get("/", (req,res)=>{
    res.json({"Message":"Welcome To ExpressWebjs"})
});


module.exports = Route;
