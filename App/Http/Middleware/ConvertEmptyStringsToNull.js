"use strict";

class ConvertEmptyStringsToNull {
  async handle(req, _res, next) {
    if (Object.keys(req.body).length) {
      req.body = Object.assign(
        ...Object.keys(req.body).map((key) => ({
          [key]: req.body[key] !== "" ? req.body[key] : null,
        })),
      );
    }

    await next();
  }
}

module.exports = ConvertEmptyStringsToNull;
