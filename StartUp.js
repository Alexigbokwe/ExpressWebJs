const app = require("./applicationBuilder");

class StartUp {
  // This method gets called by the runtime. Use this method to add services to your app.
  ConfigureServices() {
    return {
      //
    };
  }

  // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
  ConfigureBoot() {
    app.UseRouting();
    app.UseWebSocket();
  }
}
module.exports = new StartUp();
