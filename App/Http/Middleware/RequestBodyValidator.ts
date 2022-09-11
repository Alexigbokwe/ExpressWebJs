"use strict";
import FormRequest from "Elucidate/Validator/FormRequest";
import { Request, Response, NextFunction } from "Elucidate/HttpContext";

class RequestBodyValidator extends FormRequest {
  async handle(req: Request, res: Response, next: NextFunction) {
    req.validate = <T>(data: T, rules: object) => {
      return FormRequest.make<T>(data, rules);
    };

    await next();
  }
}

export default RequestBodyValidator;
