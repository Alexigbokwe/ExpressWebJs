"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const LoginValidation_1 = require("App/Http/Validation/LoginValidation");
const BaseController_1 = require("../BaseController");
class LoginController extends BaseController_1.BaseController {
    constructor(authenticator) {
        super();
        this.authenticator = authenticator;
        /*
          |--------------------------------------------------------------------------
          | Login Controller
          |--------------------------------------------------------------------------
          |
          | This controller handles authenticating users for the application and
          | sends the response with generated token back to the caller.
          |
          */
        this.login = (req, res) => (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            let validation = yield LoginValidation_1.LoginValidation.validate(req.body);
            if (validation.success) {
                return yield this.processLoginData(validation.data, res);
            }
            else {
                return this.response.UNAUTHORIZED(res, { data: validation, status: false });
            }
        });
        this.processLoginData = (data, res) => (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            return yield this.authenticator
                .processLogin(data)
                .then((user) => (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
                let token = yield this.authenticator.generateToken(user);
                return this.response.OK(res, { data: { token }, status: true });
            }))
                .catch((err) => {
                return this.response.BAD_REQUEST(res, {
                    auth: false,
                    msg: err.msg,
                    error: err.payload,
                });
            });
        });
    }
}
exports.default = LoginController;
