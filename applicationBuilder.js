class ApplicationBuilder {
  UseWebSocket() {
   return require("@socketBuilder");
  }

  UseRouting() {
    return require("@providers/Route");
  }
}

module.exports = new ApplicationBuilder();
