"use strict";
import Ws from "Elucidate/Socket/WS";
/*
|--------------------------------------------------------------------------
| socket.io
|--------------------------------------------------------------------------
|
| This file is used to register socket.io channels and start the Ws server.
|
*/

export default (socket: any) => {
  Ws.connect(socket);
  // Web socket channel controllers
  Ws.channel("notification", "chatController");
};
