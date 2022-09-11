/*
|---------------------------------------------------------------
| Http Server
|---------------------------------------------------------------
| This file bootstraps ExpressWebJs to start the Http server.
| Application Host, Port and Transfer Protocols are configured
| in the .env file. You are free to configure them. 
|
*/
import { APP, ORM } from "expresswebcorets";

APP.start({ orm: ORM.Objection });
