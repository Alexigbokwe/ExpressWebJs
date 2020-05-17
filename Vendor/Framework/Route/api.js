const express = require("express");
const Cors = new (require("@cors"))();
require("../Database/src/index");
const app = express();
class Api {
  _body(param) {
    global.serverApp = app;
    require("@providers/Route");

    serverApp.use((req, res, next) => {
      Cors.handle(req, res, next);
    });

    serverApp.use((error, req, res, next) => {
      if (res.headerSent) {
        return next(error);
      }
      console.log(error.message);
      res.status(error.code || 500);
      res.json({ message: error.message || "An Unknown Error Occured" });
    });

    serverApp.listen(param);
  }

  listen(param) {
    return this._body(param);
  }
}

module.exports = new Api();
