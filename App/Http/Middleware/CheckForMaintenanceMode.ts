import { AppShutDown } from "Elucidate/App/Shutdown";
import { Request, Response } from "Config/Http";
import { HttpResponse } from "Elucidate/HttpContext";
import { MiddlewareHandler } from "Elucidate/MiddlewareHandler";

class CheckForMaintenanceMode extends MiddlewareHandler {
  override async preHandle(req: Request, res: Response): Promise<boolean> {
    let mode = AppShutDown.isDownForMaintenance();
    if (mode.status) {
      if (AppShutDown.inEndpointsArray(mode.endPoints, req.url) == false) {
        HttpResponse.SERVICE_UNAVAILABLE(res, { data: { message: mode.message }, status: false });
      }
      return false;
    }
    return true;
  }
}

export default CheckForMaintenanceMode;
