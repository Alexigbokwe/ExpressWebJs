import { ServiceProvider } from "Elucidate/Support/ServiceProvider";
import IRoute from "Elucidate/Route/RouteConfigServiceProvider";
import ApplicationConfig from "Config/App";

class RouteServiceProvider extends ServiceProvider {
  Route!: IRoute;
  /**
   * Define your route prefix binding and control route request limit.
   * Default base route prefix is 'api'
   */
  boot() {
    this.Route = this.use("RouteConfigServiceProvider");
    this.Route.routePrefix(ApplicationConfig.routePrefix);
    return this.configureRateLimiting();
  }

  /**
   * Configure the rate limiters for the application.
   */
  configureRateLimiting() {
    return this.Route.for(`/${ApplicationConfig.routePrefix}/`).perMinute(1000000).errorMessage().httpStatusCode(429).save();
  }
}

export default RouteServiceProvider;
