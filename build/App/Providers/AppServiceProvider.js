"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ServiceProvider_1 = (0, tslib_1.__importDefault)(require("Elucidate/Support/ServiceProvider"));
const Authenticator_1 = (0, tslib_1.__importDefault)(require("Elucidate/Auth/Authenticator"));
const Documentation_1 = (0, tslib_1.__importDefault)(require("Elucidate/Documentation"));
const RouteDocumentation_1 = (0, tslib_1.__importDefault)(require("Resources/RouteDocumentation"));
class AppServiceProvicer extends ServiceProvider_1.default {
    /**
     * Register any application services.
     * @return void
     */
    register() {
        this.singleton(Authenticator_1.default);
    }
    /**
     * Bootstrap any application services.
     * @return void
     */
    boot() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            //
        });
    }
    /**
     * Load any service after application boot stage
     * @return void
     */
    booted() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            // Documentation endpoint is '/documentationView' for JSON response '/documentationJson'
            Documentation_1.default.autoDocumentEndPoints("./Resources", RouteDocumentation_1.default, "http://localhost:5200/");
        });
    }
}
exports.default = AppServiceProvicer;
