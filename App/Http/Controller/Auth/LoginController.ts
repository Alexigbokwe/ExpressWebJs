import { Request, Response } from "Elucidate/HttpContext";
import HttpResponse from "Elucidate/HttpContext/ResponseType";
import Authenticator from "Elucidate/Auth/Authenticator";
import { LoginValidation, dataType } from "App/Http/Requests/LoginValidation";

class LoginController {
  protected Auth: Authenticator;

  constructor(Authenticator: Authenticator) {
    this.Auth = Authenticator;
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
      return await this.processLogin(validation.data, res);
    } else {
      return HttpResponse.BAD_REQUEST(res, validation);
    }
  };

  /**
   * Process incoming login data.
   * @param {object} data
   * @param {Response} res
   * @return User
   */
  private processLogin = async (data: object, res: Response) => {
    return await this.Auth.processLogin(data)
      .then(async (user: object) => {
        let token = await this.Auth.generateToken(user);
        return HttpResponse.OK(res, { auth: true, token: token });
      })
      .catch((err: { msg: any; payload: any }) => {
        return HttpResponse.UNAUTHORIZED(res, {
          auth: false,
          msg: err.msg,
          error: err.payload,
        });
      });
  };
}

export default LoginController;
