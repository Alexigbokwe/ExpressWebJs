"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Hash_1 = (0, tslib_1.__importDefault)(require("Elucidate/Hashing/Hash"));
const RegisterValidation_1 = require("App/Http/Validation/RegisterValidation");
const BaseController_1 = require("../BaseController");
class RegisterController extends BaseController_1.BaseController {
    constructor(authenticator) {
        super();
        this.authenticator = authenticator;
        /*
          |--------------------------------------------------------------------------
          | Register Controller
          |--------------------------------------------------------------------------
          |
          | This controller handles the registration of new users as well as their
          | validation and creation of their token.
          |
          */
        this.register = (req, res) => (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            let validation = yield RegisterValidation_1.RegisterValidation.validate(req.body);
            if (validation.success) {
                return yield this.createUserInstance(validation.data, res);
            }
            else {
                return this.response.BAD_REQUEST(res, { data: validation, status: false });
            }
        });
        this.createUserInstance = (data, res) => (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            data["password"] = yield Hash_1.default.make(data["password"]);
            return yield this.authenticator
                .createUser(data)
                .then((user) => (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
                let token = yield this.authenticator.generateToken(user);
                return this.response.OK(res, { status: true, data: { token } });
            }))
                .catch((err) => {
                return this.response.UNAUTHORIZED(res, {
                    auth: false,
                    msg: err.msg,
                    error: err.payload,
                });
            });
        });
    }
}
exports.default = RegisterController;
