"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const socket_io_1 = require("socket.io");
const socket_1 = (0, tslib_1.__importDefault)(require("Config/socket"));
const ServiceProvider_1 = (0, tslib_1.__importDefault)(require("Elucidate/Support/ServiceProvider"));
class SocketServiceProvider extends ServiceProvider_1.default {
    /**
     * Load any service after application boot stage
     * @return void
     */
    booted() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            let socketConfig = socket_1.default;
            let server = new socket_io_1.Server(this.use("ApplicationInstance"), socketConfig);
            server.on("connection", (socket) => {
                console.log("Socket connected");
                Promise.resolve().then(() => (0, tslib_1.__importStar)(require("Routes/sockets"))).then((file) => {
                    file.default(socket);
                });
                Promise.resolve().then(() => (0, tslib_1.__importStar)(require("App/Service/WebSocket"))).then((file) => {
                    file.default.server(socket);
                });
            });
        });
    }
}
exports.default = SocketServiceProvider;
