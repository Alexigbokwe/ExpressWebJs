"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterValidation = void 0;
const tslib_1 = require("tslib");
const FormRequest_1 = (0, tslib_1.__importDefault)(require("Elucidate/Validator/FormRequest"));
class RegisterValidation extends FormRequest_1.default {
    /**
     * Handle registration request validation.
     * @param {*} data | e.g request body
     */
    static validate(data) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return yield this.make(data, {
                username: "required|string|max:255",
                email: "required|string|email|max:255",
                password: "required|string|min:8",
            });
        });
    }
}
exports.RegisterValidation = RegisterValidation;
