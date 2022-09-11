"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginValidation = void 0;
const tslib_1 = require("tslib");
const FormRequest_1 = (0, tslib_1.__importDefault)(require("Elucidate/Validator/FormRequest"));
class LoginValidation extends FormRequest_1.default {
    /**
     * Handle login request validation.
     * @param {*} data | e.g request body
     */
    static validate(data) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return yield this.make(data, {
                email: "required|string|email|max:255",
                password: "required|string|min:8",
            });
        });
    }
}
exports.LoginValidation = LoginValidation;
