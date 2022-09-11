"use strict";
import { Request, Response } from "Config/http";
import { MiddlewareHandler } from "Elucidate/MiddlewareHandler";
import FormRequest from "Elucidate/Validator/FormRequest";

class RequestBodyValidator extends MiddlewareHandler {
  override async preHandle(req: Request, res: Response): Promise<boolean> {
    req.validate = <T>(data: T, rules: object) => {
      return FormRequest.make<T>(data, rules);
    };

    return true;
  }
}

export default RequestBodyValidator;
