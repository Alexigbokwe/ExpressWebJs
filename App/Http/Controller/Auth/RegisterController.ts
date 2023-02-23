import Hash from "Elucidate/Hashing/Hash";
import { Request, Response } from "Config/http";
import { Authenticator } from "Elucidate/Auth/Authenticator";
import { dataType, RegisterValidation } from "App/Http/Validation/RegisterValidation";
import { BaseController } from "../BaseController";

export class RegisterController extends BaseController {
  constructor(private authenticator: Authenticator) {
    super();
  }

  /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation of their token.
    |
    */
  public async register(req: Request, res: Response) {
    let validation = await RegisterValidation.validate<dataType>(req.body);
    if (validation.success) {
      validation.data.password = String(await Hash.make(validation.data.password));
      let user = await this.authenticator.processRegistration(validation.data);
      if (user.status) {
        let token = this.authenticator.generateToken(user.payload);
        return this.response.OK(res, { status: true, data: { token } });
      }
      return this.response.UNAUTHORIZED(res, {
        auth: user.status,
        msg: user.message,
        error: user.payload,
      });
    } else {
      return this.response.BAD_REQUEST(res, { data: validation, status: false });
    }
  }
}
