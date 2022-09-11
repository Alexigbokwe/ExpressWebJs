"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ServiceProvider_1 = (0, tslib_1.__importDefault)(require("Elucidate/Support/ServiceProvider"));
const app_1 = (0, tslib_1.__importDefault)(require("Config/app"));
class RouteServiceProvider extends ServiceProvider_1.default {
    /**
     * Define your route prefix binding and control route request limit.
     * Default base route prefix is 'api'
     */
    boot() {
        this.Route = this.use("RouteConfigServiceProvider");
        this.Route.routePrefix(app_1.default.routePrefix);
        return this.configureRateLimiting();
    }
    /**
     * Configure the rate limiters for the application.
     */
    configureRateLimiting() {
        return this.Route.for(`/${app_1.default.routePrefix}/`).perMinute(1000).errorMessage().httpStatusCode(429).save();
    }
}
exports.default = RouteServiceProvider;
