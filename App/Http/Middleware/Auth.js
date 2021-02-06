"use strict";
const auth = require("../Controller/Auth/Auth");

class AuthMiddleware {
  async handle(req, res, next) {
    let result = await auth.processAuthMW(req.headers["authorization"]);
    if (result.type == "error") {
      return res
        .status(404)
        .json({ auth: false, message: result.msg, payload: result.payload });
    }

    req.user = result.data;

    await next();
  }
}

module.exports = AuthMiddleware;
