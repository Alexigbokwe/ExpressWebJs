"use strict";

/*
|--------------------------------------------------------------------------
| Websocket
|--------------------------------------------------------------------------
|
| This file is used to register websocket channels and start the Ws server.
|
*/

const wss = require("@websocket");

wss.on("connection", (ws, request) => {
  console.log("Connected " + request.socket.remoteAddress);

  ws.on("message", (message) => {
    console.log(`${message}`);
    ws.send(message);
  });
});
