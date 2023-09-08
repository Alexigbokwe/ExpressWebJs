import { Authenticator } from "Elucidate/Auth/Authenticator";
import { Request, Response } from "Config/Http";
import { HttpResponse } from "Elucidate/HttpContext";
import { MiddlewareHandler } from "Elucidate/MiddlewareHandler";
import { Authority } from "Elucidate/AuthorizationFilter";

class AuthMiddleware extends MiddlewareHandler {
  constructor(private authenticator: Authenticator) {
    super();
  }

  override async preHandle(req: Request, res: Response): Promise<boolean> {
    let result = await this.authenticator.processAuthenticationMiddleware(req.headers["authorization"]);
    if (!result.status) {
      HttpResponse.UNAUTHORIZED(res, { auth: result.status, message: result.message, payload: result.payload });
      return false;
    }

    req.user = result.payload;
    Authority.setAuthenticatedUser(req.user as {} & { id: string | number });
    return true;
  }
}

export default AuthMiddleware;
