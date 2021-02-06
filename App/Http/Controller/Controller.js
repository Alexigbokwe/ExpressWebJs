"use strict";
const Auth = require("./Auth/Auth");

class Controller {
  /**
   * Create a new user instance
   * @param {Array} record
   */
  createUser(record) {
    return new Promise(async (resolve, reject) => {
      let response = await Auth.processRegistration(record);
      response.error ? reject(response) : resolve(response.payload);
    });
  }

  /**
   * Process user login
   * @param {Array} record
   */
  async processLogin(record) {
    return await new Promise(async (resolve, reject) => {
      let response = await Auth.processLogin(record);
      response.error ? reject(response) : resolve(response.payload);
    });
  }
}

module.exports = Controller;
