import appShutDown from "Elucidate/App/shutdown";
import { Request, Response } from "Config/http";
import { HttpResponse } from "Elucidate/HttpContext";
import { MiddlewareHandler } from "Elucidate/MiddlewareHandler";

class CheckForMaintenanceMode extends MiddlewareHandler {
  override async preHandle(req: Request, res: Response): Promise<boolean> {
    let mode = appShutDown.isDownForMaintenance();
    if (mode.status) {
      if (appShutDown.inEndpointsArray(mode.endPoints, req.url) == false) {
        HttpResponse.SERVICE_UNAVAILABLE(res, { data: { message: mode.message }, status: false });
      }
      return false;
    }
    return true;
  }
}

export default CheckForMaintenanceMode;
