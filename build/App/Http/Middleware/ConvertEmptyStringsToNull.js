"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const MiddlewareHandler_1 = require("Elucidate/MiddlewareHandler");
class ConvertEmptyStringsToNull extends MiddlewareHandler_1.MiddlewareHandler {
    preHandle(req, _res) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            if (req.body && Object.keys(req.body).length) {
                req.body = Object.assign({}, ...Object.keys(req.body).map((key) => ({
                    [key]: req.body ? (req.body[key] !== "" ? req.body[key] : null) : null,
                })));
            }
            return true;
        });
    }
}
exports.default = ConvertEmptyStringsToNull;
