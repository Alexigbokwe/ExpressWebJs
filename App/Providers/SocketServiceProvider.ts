import { Server } from "socket.io";
import config from "Config/socket";
import ServiceProvider from "Elucidate/Support/ServiceProvider";

class SocketServiceProvider extends ServiceProvider {
  /**
   * Load any service after application boot stage
   * @return void
   */
  public async booted() {
    let socketConfig: any = config;
    let server = new Server(this.app.use("ApplicationInstance"), socketConfig);
    server.on("connection", (socket) => {
      console.log("Socket connected");
      import("Routes/sockets").then((file) => {
        file.default(socket);
      });
      import("App/Service/WebSocket").then((file) => {
        file.default.server(socket);
      });
    });
  }
}

export default SocketServiceProvider;
