"use strict";
const auth = require("@expressWebAuth");

class Auth {
  /**
   * Hash Password
   * @param {String} password
   * @param {Number} length
   */
  static async hashPassword(password) {
    return await auth.hashPassword(password);
  }

  /**
   * Generate Token
   * @param {Object} user
   */
  static async generateToken(user) {
    return await auth.generateToken(user);
  }

  /**
   * Compare Password
   * @param {String} requestPassword | password comming from request body
   * @param {String} databasePassword | password saved in database
   * @return {Boolean} Boolean
   */
  static async comparePassword(requestPassword, databasePassword) {
    return await auth.comparePassword(requestPassword, databasePassword);
  }

  /**
   * Verify Token
   * @param {String} token
   * @return {Object}
   */
  static verifyToken(token) {
    return new Promise((resolve, reject) => {
      auth
        .verifyToken(token)
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  /**
   * Process user registration details
   * @param {*} record
   */
  static async processRegistration(record) {
    return await auth.processRegistration(record);
  }

  /**
   * Process user login details
   * @param {*} record
   */
  static async processLogin(record) {
    return await auth.processLogin(record);
  }

  /**
   * Process auth middleware
   * @param {*} authorization | req.headers["authorization"]
   */
  static async processAuthMW(authorization) {
    return await auth.processAuthMW(authorization);
  }
}

module.exports = Auth;
