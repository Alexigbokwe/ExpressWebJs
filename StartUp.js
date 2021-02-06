const app = require("./applicationBuilder");

class StartUp {
  static boot() {
    app.UseWebSocket();
  }
}
module.exports = StartUp;
