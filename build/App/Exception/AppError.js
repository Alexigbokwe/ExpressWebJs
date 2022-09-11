"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
const tslib_1 = require("tslib");
const BaseException_1 = (0, tslib_1.__importDefault)(require("Elucidate/ExceptionHandler/BaseException"));
class AppError extends BaseException_1.default {
    constructor(message, code) {
        super(message, code);
        this.message = message;
    }
}
exports.AppError = AppError;
