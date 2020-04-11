const express = require("express");
const Route = express.Router();
const UserController = new (require("../../App/Http/Controller/UsersController"))();

Route.get("/", UserController.index);

Route.get("/allUsers", UserController.allUsers);

Route.get("/:id", UserController.User);

module.exports = Route;
