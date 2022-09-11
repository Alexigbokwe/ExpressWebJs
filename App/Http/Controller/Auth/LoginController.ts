import { Request, Response } from "Elucidate/HttpContext";
import HttpResponse from "Elucidate/HttpContext/ResponseType";
import FormRequest from "Elucidate/Validator/FormRequest";
import Authenticator from "Elucidate/Auth/Authenticator";

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
    let validation = await this.validator(req.body);
    if (validation.success) {
      return await this.processLogin(req.body, res);
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
      .then(async (user: any) => {
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

  /**
   * Get a validator for an incoming login request.
   * @param {object} record
   * @return Validator
   */
  private validator = (record: object) => {
    return FormRequest.make(record, {
      email: "required|string|email|max:255",
      password: "required|string|min:8",
    });
  };
}

export default LoginController;
