"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const HttpContext_1 = require("Elucidate/HttpContext");
const MiddlewareHandler_1 = require("Elucidate/MiddlewareHandler");
class AuthMiddleware extends MiddlewareHandler_1.MiddlewareHandler {
    constructor(authenticator) {
        super();
        this.authenticator = authenticator;
    }
    preHandle(req, res) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            let result = yield this.authenticator.processAuthMW(req.headers["authorization"]);
            if (result.type == "error") {
                HttpContext_1.HttpResponse.UNAUTHORIZED(res, { auth: false, message: result.msg, payload: result.payload });
                return false;
            }
            req.user = result.payload;
            return true;
        });
    }
}
exports.default = AuthMiddleware;
