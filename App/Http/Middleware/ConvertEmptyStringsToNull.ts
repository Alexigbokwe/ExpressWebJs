import { Request, Response } from "Config/http";
import { MiddlewareHandler } from "Elucidate/MiddlewareHandler";

class ConvertEmptyStringsToNull extends MiddlewareHandler {
  override async preHandle(req: Request, _res: Response): Promise<boolean> {
    if (req.body && Object.keys(req.body).length) {
      req.body = Object.assign(
        {},
        ...Object.keys(req.body).map((key) => ({
          [key]: req.body ? (req.body[key] !== "" ? req.body[key] : null) : null,
        })),
      );
    }
    return true;
  }
}

export default ConvertEmptyStringsToNull;
