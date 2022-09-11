"use strict";
import Authenticator from "Elucidate/Auth/Authenticator";
import { Request, Response, NextFunction } from "Elucidate/HttpContext";
import HttpResponse from "Elucidate/HttpContext/ResponseType";

class AuthMiddleware {
  Auth: Authenticator;
  constructor(Authenticator:Authenticator) {
    this.Auth = Authenticator
  }
  handle = async(req: Request, res: Response, next: NextFunction) =>{
    let result = await this.Auth.processAuthMW(req.headers["authorization"]);
    if (result.type == "error") {
      return HttpResponse.UNAUTHORIZED(res, { auth: false, message: result.msg, payload: result.payload });
    }

    req.user = result.payload;

    await next();
  }
}

export default AuthMiddleware;
