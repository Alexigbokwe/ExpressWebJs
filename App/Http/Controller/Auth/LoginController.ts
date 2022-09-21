import { Request, Response } from "Config/http";
import Authenticator from "Elucidate/Auth/Authenticator";
import { LoginValidation, dataType } from "App/Http/Validation/LoginValidation";
import { BaseController } from "../BaseController";

class LoginController extends BaseController {
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
  login = async (req: Request, res: Response) => {
    let validation = await LoginValidation.validate<dataType>(req.body);
    if (validation.success) {
      return await this.processLoginData(validation.data, res);
    } else {
      return this.response.UNAUTHORIZED(res, { data: validation, status: false });
    }
  };

  private processLoginData = async (data: object, res: Response) => {
    return await this.authenticator
      .processLogin(data)
      .then(async (user: object) => {
        let token = await this.authenticator.generateToken(user);
        return this.response.OK(res, { data: { token }, status: true });
      })
      .catch((err: { msg: any; payload: any }) => {
        return this.response.BAD_REQUEST(res, {
          auth: false,
          msg: err.msg,
          error: err.payload,
        });
      });
  };
}

export default LoginController;
