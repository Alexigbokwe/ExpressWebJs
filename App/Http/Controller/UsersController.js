/** =========================================================================================
    Author: Lexigbokwe
    File Name: UserController.js
    Description: The User Controller is responsible for controlling the application user logic and 
                acts as the coordinator between the View and the Model. The User Controller receives 
                an input from the users via the View, then processes the user's data with the help of Model 
                and passes the results back to the View.
========================================================================================== **/

"use strict";
const HttpError = require("../Middleware/HttpError");
const UserRepository = require("../../Repository/UserRepo/UserRepo");

class UsersController {
  constructor(UserRepository) {
    this.UserRepository = UserRepository;
  }
  index(req, res) {
    console.log("Get request is working");
    res.json({ message: "It Worked!" });
  }

  allUsers(req, res) {
    res.json(UserRepository.getAllUsers());
  }

  User(req, res, next) {
    let id = parseInt(req.params.id);
    if (!UserRepository.getAUser(id)) {
      //handling error
      return next(new HttpError("Could not find resource", 404));
    }
    res.json(UserRepository.getAUser(id));
  }
}

module.exports = new UsersController();
