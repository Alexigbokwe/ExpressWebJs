import Hash from "Elucidate/Hashing/Hash";
import { Request, Response } from "Config/http";
import Authenticator from "Elucidate/Auth/Authenticator";
import { dataType, RegisterValidation } from "App/Http/Validation/RegisterValidation";
import { BaseController } from "../BaseController";

class RegisterController extends BaseController {
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
  register = async (req: Request, res: Response) => {
    let validation = await RegisterValidation.validate<dataType>(req.body);
    if (validation.success) {
      return await this.createUserInstance(validation.data, res);
    } else {
      return this.response.BAD_REQUEST(res, { data: validation, status: false });
    }
  };

  private createUserInstance = async (data: object, res: Response) => {
    data["password"] = await Hash.make(data["password"]);
    return await this.authenticator
      .createUser(data)
      .then(async (user: any) => {
        let token = await this.authenticator.generateToken(user);
        return this.response.OK(res, { status: true, data: { token } });
      })
      .catch((err: { msg: any; payload: any }) => {
        return this.response.UNAUTHORIZED(res, {
          auth: false,
          msg: err.msg,
          error: err.payload,
        });
      });
  };
}

export default RegisterController;
