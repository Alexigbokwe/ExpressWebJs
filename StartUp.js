const app = require("./applicationBuilder");

class StartUp {
  boot() {
    app.UseRouting();
    app.UseWebSocket();
  }
}
module.exports = new StartUp();
