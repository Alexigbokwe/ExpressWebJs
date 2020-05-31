"use strict";
const WsBaseController = require("@WsBaseController");

class chatController extends WsBaseController {
  constructor(socket) {
    super(socket);
  }

  onMessage(data) {
    // same as: socket.on('message')
    console.log(data);
  }

  onClose() {
    // same as: socket.on('close')
  }

  onError() {
    // same as: socket.on('error')
  }
}

module.exports = chatController;
