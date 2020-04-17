const express = require("express");
const Route = express.Router();
const UserController = require("@controller/UserController");
var Auth = require("@middleware/Auth");

Route.get("/", Auth, UserController.index);

Route.get("/:id", UserController.show);

module.exports = Route;
