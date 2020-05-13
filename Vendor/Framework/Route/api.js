const express = require("express");
const Cors = new (require("@cors"))();
const app = express();
class Api {
  _body(param) {
    new (require("@providers/Route"))(app);

    app.use((req, res, next) => {
      Cors.handle(req, res, next);
    });

    app.use((error, req, res, next) => {
      if (res.headerSent) {
        return next(error);
      }
      console.log(error.message);
      res.status(error.code || 500);
      res.json({ message: error.message || "An Unknown Error Occured" });
    });

    app.listen(param);
  }

  listen(param) {
    return this._body(param);
  }
}

module.exports = new Api();
