"use strict";
class ChatController {
  protected socket: any;
  constructor(socket: any) {
    this.socket = socket;
    this.setMethodListeners();
  }

  onMessage = (data: any) => {
    // same as: socket.on('message')
    this.socket.emit("message", data);
    console.log(data);
  };

  onClose = () => {
    // same as: socket.on('close')
  };

  onError = () => {
    // same as: socket.on('error')
  };

  private setMethodListeners() {
    this.socket.on("message", this.onMessage);
    this.socket.on("close", this.onClose);
    this.socket.on("error", this.onError);
  }
}

export default ChatController;
