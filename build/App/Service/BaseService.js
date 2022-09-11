"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
const tslib_1 = require("tslib");
const AppError_1 = require("App/Exception/AppError");
const BaseException_1 = (0, tslib_1.__importDefault)(require("Elucidate/ExceptionHandler/BaseException"));
const Broker_1 = require("Elucidate/Broker");
class BaseService extends Broker_1.BaseBroker {
    constructor() {
        super(...arguments);
        this.getFriendlyErrorMessage = (error) => {
            if (error instanceof Error || error instanceof BaseException_1.default || error instanceof AppError_1.AppError) {
                return error.message;
            }
            return "Error occurred";
        };
    }
}
exports.BaseService = BaseService;
