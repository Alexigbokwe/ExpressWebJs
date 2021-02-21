"use strict";
const Auth = require("./Auth");
const FormRequest = use("FormRequest");
let processLogin = Symbol("processLogin");
let validator = Symbol("validator");

class LoginController {
  constructor({ Controller }) {
    this.Controller = Controller;
  }
  /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | sends the response with generated token back to the caller.
    |
    */
  login = async (req, res, next) => {
    let validation = await this[validator](req.body);
    if (validation.success) {
      return await this[processLogin](req.body, res, next);
    } else {
      return res.status(404).json(validation);
    }
  };

  /**
   * Process incoming login data.
   * @param {Array} data
   * @param {Response} res
   * @return User
   */
  [processLogin] = async (data, res) => {
    await this.Controller.processLogin(data)
      .then(async (user) => {
        let token = await Auth.generateToken(user);
        return res.status(200).send({ auth: true, token: token });
      })
      .catch((error) => {
        return res.status(422).send({
          auth: false,
          msg: error.msg,
          error: error.payload,
        });
      });
  };

  /**
   * Get a validator for an incoming login request.
   * @param {Array} record
   * @return Validator
   */
  [validator](record) {
    return FormRequest.make(record, {
      email: "required|string|email|max:255",
      password: "required|string|min:8",
    });
  }
}

module.exports = LoginController;
