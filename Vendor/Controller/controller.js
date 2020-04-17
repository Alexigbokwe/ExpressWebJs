class BaseController {
  constructor() {
    new (require("./mac"))();
  }
}
module.exports = BaseController;
