const ioc = require("expressweb-ioc");
const pathTo = process.env.PWD;
class ServiceProvider {
  /**
   * Register application services.
   */
  boot() {
    return {
      //
    };
  }
}

module.exports = new ServiceProvider();
