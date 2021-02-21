"use strict";
const Auth = require("./Auth");
const FormRequest = use("FormRequest");
let create = Symbol("create");
let validator = Symbol("validator");
const Hash = use("Hash");

class RegisterController {
  constructor({ Controller }) {
    this.Controller = Controller;
  }
  /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation of their token.
    |
    */
  register = async (req, res) => {
    let validation = await this[validator](req.body);
    if (validation.success) {
      return await this[create](req.body, res);
    } else {
      return res.status(422).json(validation);
    }
  };

  /**
   * Get a validator for an incoming registration request.
   * @param {Array} record
   * @return Validator
   */
  async [validator](record) {
    return await FormRequest.make(record, {
      first_name: "required|string|max:255",
      last_name: "required|string|max:255",
      email: "required|string|email|max:255",
      password: "required|string|min:8",
    });
  }

  /**
   * Create a new user instance after a valid registration.
   * @param {Array} data
   * @param {Response} res
   * @return  User
   */
  [create] = async (data, res) => {
    data.password = await Hash.make(data.password);
    return await this.Controller.createUser(data)
      .then(async (user) => {
        let token = await Auth.generateToken(user);
        return res.status(200).send({ auth: true, token: token });
      })
      .catch((error) => {
        return res.status(404).send({
          auth: false,
          msg: error.msg,
          error: error.payload,
        });
      });
  };
}

module.exports = RegisterController;
