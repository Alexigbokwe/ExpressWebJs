"use strict";

/*
|--------------------------------------------------------------------------
| Websocket Config  
|--------------------------------------------------------------------------
| npm i --save ws
*/
module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Path
  |--------------------------------------------------------------------------
  |
  | The base path on which the websocket server will accept connections.
  | Type {String}
  */
  path: "/expressweb-ws",

  /*
  |--------------------------------------------------------------------------
  | Host
  |--------------------------------------------------------------------------
  |
  | The hostname where to bind the server.
  | Type {String}
  */
  host: "localhost",

  /*
  |--------------------------------------------------------------------------
  | Port
  |--------------------------------------------------------------------------
  |
  | The port where to bind the server.
  | Type {Number}
  */
  port: "3000",

  /*
  |--------------------------------------------------------------------------
  | Server Interval
  |--------------------------------------------------------------------------
  |
  | This interval is used to create a timer for identifying dead client
  | connections.
  |
  */
  serverInterval: 30000,

  /*
  |--------------------------------------------------------------------------
  | Server Attempts
  |--------------------------------------------------------------------------
  |
  | Server attempts are used with serverInterval to identify dead client
  | connections. A total of `serverAttempts` attmepts after `serverInterval`
  | will be made before terminating the client connection.
  |
  */
  serverAttempts: 3,

  /*
  |--------------------------------------------------------------------------
  | Auto Accept Connections
  |--------------------------------------------------------------------------
  |
  | You should not use autoAcceptConnections for production
  | applications, as it defeats all standard cross-origin protection
  | facilities built into the protocol and the browser.  You should
  | *always* verify the connection's origin and decide whether or not
  | to accept it.
  |
  */
  autoAcceptConnections: false,

  /*
  |--------------------------------------------------------------------------
  | Http Server
  |--------------------------------------------------------------------------
  | This is the server the websocket will run on. 
  | Leave it to serverApp to run with the the current server.
  |
  */
  httpServer: serverApp,
};
