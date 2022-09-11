"use strict";

import { Request, Response, NextFunction } from "Elucidate/HttpContext";

class ConvertEmptyStringsToNull {
  public async handle(req: Request, _res: Response, next: NextFunction) {
    if (Object.keys(req.body).length) {
      req.body = Object.assign({},
        ...Object.keys(req.body).map((key) => ({
          [key]: req.body[key] !== "" ? req.body[key] : null,
        }))
      );
    }

    await next();
  }
}

export default ConvertEmptyStringsToNull;
