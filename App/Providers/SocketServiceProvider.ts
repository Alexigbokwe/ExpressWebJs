// import { Server } from "socket.io";
// import config from "Config/Socket";
// import { ServiceProvider } from "Elucidate/Support/ServiceProvider";

// export class SocketServiceProvider extends ServiceProvider {
//   /**
//    * Load any service after application boot stage
//    * @return void
//    */

//   public register(): void {
//     this.bindAsSingletonFunction("io", () => {
//       return new Server(this.use("ProtocolServer") as any, config);
//     });
//   }
// }
