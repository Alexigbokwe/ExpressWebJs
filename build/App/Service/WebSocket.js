"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WebSocket {
    server(ioServer) {
        this.io = ioServer;
    }
    channel(channelName) {
        this.io.emit("room", channelName);
        return this;
    }
    emit(listener, handler) {
        this.io.emit(listener, handler);
    }
}
exports.default = new WebSocket();
