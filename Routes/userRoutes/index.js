const express = require("express");
const Route = express.Router();
const UserController = require("@controller/UsersController");
const AnotherController = require("@controller/AnotherController");

Route.get("/", UserController.index);

Route.get("/allUsers", UserController.allUsers);

Route.get("/myName", AnotherController.getMyName);

Route.get("/:id", UserController.User);

module.exports = Route;
