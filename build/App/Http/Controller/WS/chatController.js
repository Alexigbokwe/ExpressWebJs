"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ChatController {
    constructor(socket) {
        this.onMessage = (data) => {
            // same as: socket.on('message')
            this.socket.emit("message", data);
            console.log(data);
        };
        this.onClose = () => {
            // same as: socket.on('close')
        };
        this.onError = () => {
            // same as: socket.on('error')
        };
        this.socket = socket;
        this.setMethodListeners();
    }
    setMethodListeners() {
        this.socket.on("message", this.onMessage);
        this.socket.on("close", this.onClose);
        this.socket.on("error", this.onError);
    }
}
exports.default = ChatController;
