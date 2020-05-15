const HttpError = require("@middleware/HttpError");
require("dotenv").config();
Auth = (req, res, next) => {
  const header = req.headers["authorization"];
  if (typeof header !== "undefined") {
    const bearer = header.split(" ");
    const token = bearer[1];

    jwt.verify(token, process.env.APP_KEY, (err, authorizedData) => {
      if (err)
        return res
          .status(500)
          .send({ auth: false, message: "Failed to authenticate token." });
      res.json({
        message: "Successful log in",
        authorizedData,
      });
    });
    next();
  } else {
    //If header is undefined return Forbidden (403)
    res.json(new HttpError("Authentication field", 404));
  }
};

module.exports = Auth;
