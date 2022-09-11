"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RouteManager_1 = require("Elucidate/Route/RouteManager");
/*
    |--------------------------------------------------------------------------
    | Api route
    |--------------------------------------------------------------------------
    |
    | Here is where you can register your application routes. These
    | routes are loaded by the RouteProvider. Now create something great!
    |
*/
RouteManager_1.Route.get("/", (req, res) => {
    res.send("Welcome to ExpressWebJs Version 4");
});
//--------------------------------------------------------------------------
exports.default = RouteManager_1.Route.exec;
