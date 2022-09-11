import Hash from "Elucidate/Hashing/Hash";
import { Request, Response } from "Elucidate/HttpContext";
import HttpResponse from "Elucidate/HttpContext/ResponseType";
import Authenticator from "Elucidate/Auth/Authenticator";
import { dataType, RegisterValidation } from "App/Http/Requests/RegisterValidation";

class RegisterController {
  protected Auth: Authenticator;

  constructor(Authenticator: Authenticator) {
    this.Auth = Authenticator;
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
  register = async (req: Request, res: Response) => {
    let validation = await RegisterValidation.validate<dataType>(req.body);
    if (validation.success) {
      return await this.create(validation.data, res);
    } else {
      return HttpResponse.BAD_REQUEST(res, validation);
    }
  };

  /**
   * Create a new user instance after a valid registration.
   * @param {object} data
   * @param {Response} res
   * @return User
   */
  private create = async (data: object, res: Response) => {
    data["password"] = await Hash.make(data["password"]);
    return await this.Auth.createUser(data)
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
}

export default RegisterController;
