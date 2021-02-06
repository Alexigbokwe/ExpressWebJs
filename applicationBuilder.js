class ApplicationBuilder {
  static UseWebSocket() {
    let ws = require("@socketBuilder");
    return ws();
  }
}

module.exports = ApplicationBuilder;
