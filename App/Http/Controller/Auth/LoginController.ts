import { Request, Response } from "Config/Http";
import { Authenticator } from "Elucidate/Auth/Authenticator";
import { LoginValidation, dataType } from "App/Http/Validation/LoginValidation";
import { BaseController } from "../BaseController";

export class LoginController extends BaseController {
  constructor(private readonly authenticator: Authenticator) {
    super();
  }

  /**
   * Authenticate user and sends the response with a generated token.
   */
  public async login(req: Request, res: Response) {
    const validation = await LoginValidation.validate<dataType>(req.body);
    if (!validation.success) {
      return this.response.UNAUTHORIZED(res, { data: validation, status: false });
    }

    const user = await this.authenticator.processLogin(validation.data);
    if (!user.status) {
      return this.response.BAD_REQUEST(res, {
        auth: user.status,
        message: user.message,
        error: user.payload,
      });
    }

    const token = this.authenticator.generateToken(user.payload);
    return this.response.OK(res, { data: { token }, status: true });
  }
}
