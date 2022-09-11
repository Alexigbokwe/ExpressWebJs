"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const WS_1 = (0, tslib_1.__importDefault)(require("Elucidate/Socket/WS"));
/*
|--------------------------------------------------------------------------
| socket.io
|--------------------------------------------------------------------------
|
| This file is used to register socket.io channels and start the Ws server.
|
*/
exports.default = (socket) => {
    WS_1.default.connect(socket);
    // Web socket channel controllers
    WS_1.default.channel("notification", "chatController");
};
