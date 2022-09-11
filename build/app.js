"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
|---------------------------------------------------------------
| Http Server
|---------------------------------------------------------------
| This file bootstraps ExpressWebJs to start the Http server.
| Application Host, Port and Transfer Protocols are configured
| in the .env file. You are free to configure them.
|
*/
const expresswebcorets_1 = require("expresswebcorets");
expresswebcorets_1.APP.start({ orm: expresswebcorets_1.ORM.Objection });
