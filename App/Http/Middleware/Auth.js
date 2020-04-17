const HttpError = require("@middleware/HttpError");
Auth = (req, res, next) => {
  console.log("this is the authentication middleware");
  var isAuth = true;
  if (isAuth) {
    next();
  } else {
    res.json(new HttpError("Authentication field", 404));
  }
};

module.exports = Auth;
