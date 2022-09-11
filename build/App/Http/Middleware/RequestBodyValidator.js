"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const MiddlewareHandler_1 = require("Elucidate/MiddlewareHandler");
const FormRequest_1 = (0, tslib_1.__importDefault)(require("Elucidate/Validator/FormRequest"));
class RequestBodyValidator extends MiddlewareHandler_1.MiddlewareHandler {
    preHandle(req, res) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            req.validate = (data, rules) => {
                return FormRequest_1.default.make(data, rules);
            };
            return true;
        });
    }
}
exports.default = RequestBodyValidator;
