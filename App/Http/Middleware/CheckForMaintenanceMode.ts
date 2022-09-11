"use strict";
import appShutDown from "Elucidate/App/shutdown";
import { Request, Response, NextFunction } from "Elucidate/HttpContext";
import HttpResponse from "Elucidate/HttpContext/ResponseType";

class CheckForMaintenanceMode {
  public async handle(req: Request, res: Response, next: NextFunction) {
    let mode = appShutDown.isDownForMaintenance();
    if (mode.status) {
      if (appShutDown.inEndpointsArray(req.url, mode.endPoints) == false) {
        return HttpResponse.SERVICE_UNAVAILABLE(res,{ message: mode.message })
      }
    }
    await next();
  }
}

export default CheckForMaintenanceMode;
