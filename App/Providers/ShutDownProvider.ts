"use strict";
import ServiceProvider from "Elucidate/Support/ServiceProvider";

class ShutDownProvider extends ServiceProvider {
  /**
   * Bootstrap any application services.
   * @return void
   */
  boot() {
    let application = this.app.use("ApplicationInstance");
    process.on("SIGINT", (error) => {
      console.log("\n[server] Shutting down...", error);
      application.close();
      process.exit();
    });

    process.on("SIGTERM", (error) => {
      console.log("\n[server] Shutting down...", error);
      application.close();
      process.exit();
    });

    process.on("uncaughtException", (error) => {
      console.log("\n[server] Shutting down...", error);
      application.close();
      process.exit();
    });
  }
}

export default ShutDownProvider;
