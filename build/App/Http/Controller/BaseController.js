"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
const tslib_1 = require("tslib");
const HttpContext_1 = require("Elucidate/HttpContext");
const BaseException_1 = (0, tslib_1.__importDefault)(require("Elucidate/ExceptionHandler/BaseException"));
const Broker_1 = require("Elucidate/Broker");
class BaseController extends Broker_1.BaseBroker {
    constructor() {
        super(...arguments);
        this.response = HttpContext_1.HttpResponse;
        this.getFriendlyErrorMessage = (error) => {
            if (error instanceof Error || error instanceof BaseException_1.default) {
                return error.message;
            }
            return "Error occurred";
        };
    }
}
exports.BaseController = BaseController;
