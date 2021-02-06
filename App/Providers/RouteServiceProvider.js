const RouteConfig = require("@routeConfig");

class RouteServiceProvider extends RouteConfig {
  /**
   * Define your route prefix binding and basePath etc.
   * Default base path is Routes folder in the application root
   */
  boot() {
    return this.routePrefix("api").basePath("Routes");
  }

  /**
   * Configure the rate limiters for the application.
   */
  configureRateLimiting() {
    return this.for("/api/")
      .perMinute(60)
      .errorMessage()
      .httpStatusCode(429)
      .save();
  }
}

module.exports = RouteServiceProvider;
