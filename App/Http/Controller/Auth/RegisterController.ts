import Hash from "Elucidate/Hashing/Hash";
import { Request, Response } from "Config/Http";
import { Authenticator } from "Elucidate/Auth/Authenticator";
import { dataType, RegisterValidation } from "App/Http/Validation/RegisterValidation";
import { BaseController } from "../BaseController";

export class RegisterController extends BaseController {
  constructor(private authenticator: Authenticator) {
    super();
  }

  // Handle user registration and token generation.
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
