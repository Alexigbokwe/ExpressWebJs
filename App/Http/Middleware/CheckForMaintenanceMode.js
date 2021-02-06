"use strict";
const appShutDown = require("@shutDown");

class CheckForMaintenanceMode {
  async handle(req, res, next) {
    let mode = appShutDown.isDownForMaintenance();
    if (mode.status) {
      if (appShutDown.inEndpointsArray(req.url, mode.endPoints) == false) {
        return res.status(503).json({ message: mode.message });
      }
    }
    await next();
  }
}

module.exports = CheckForMaintenanceMode;
