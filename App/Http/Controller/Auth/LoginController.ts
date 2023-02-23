import { Request, Response } from "Config/http";
import { Authenticator } from "Elucidate/Auth/Authenticator";
import { LoginValidation, dataType } from "App/Http/Validation/LoginValidation";
import { BaseController } from "../BaseController";

export class LoginController extends BaseController {
  constructor(private authenticator: Authenticator) {
    super();
  }
  /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | sends the response with generated token back to the caller.
    |
    */
  public async login(req: Request, res: Response) {
    let validation = await LoginValidation.validate<dataType>(req.body);
    if (validation.success) {
      const user = await this.authenticator.processLogin(validation.data);
      if (user.status) {
        let token = this.authenticator.generateToken(user.payload);
        return this.response.OK(res, { data: { token }, status: true });
      }
      return this.response.BAD_REQUEST(res, {
        auth: user.status,
        message: user.message,
        error: user.payload,
      });
    } else {
      return this.response.UNAUTHORIZED(res, { data: validation, status: false });
    }
  }
}
