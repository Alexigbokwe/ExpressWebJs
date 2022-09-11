"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const shutdown_1 = (0, tslib_1.__importDefault)(require("Elucidate/App/shutdown"));
const HttpContext_1 = require("Elucidate/HttpContext");
const MiddlewareHandler_1 = require("Elucidate/MiddlewareHandler");
class CheckForMaintenanceMode extends MiddlewareHandler_1.MiddlewareHandler {
    preHandle(req, res) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            let mode = shutdown_1.default.isDownForMaintenance();
            if (mode.status) {
                if (shutdown_1.default.inEndpointsArray(mode.endPoints, req.url) == false) {
                    HttpContext_1.HttpResponse.SERVICE_UNAVAILABLE(res, { data: { message: mode.message }, status: false });
                }
                return false;
            }
            return true;
        });
    }
}
exports.default = CheckForMaintenanceMode;
