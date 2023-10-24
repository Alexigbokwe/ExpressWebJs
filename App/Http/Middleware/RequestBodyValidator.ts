import { Request, Response } from "Config/Http";
import { MiddlewareHandler } from "Elucidate/MiddlewareHandler";
import { FormRequest, Rules } from "Elucidate/Validator/FormRequest";

class RequestBodyValidator extends MiddlewareHandler {
  override async preHandle(req: Request, res: Response): Promise<boolean> {
    req.validate = <T>(data: T, rules: Rules) => {
      return FormRequest.make<T>(data, rules);
    };

    return true;
  }
}

export default RequestBodyValidator;
