"use strict";

/*
|--------------------------------------------------------------------------
| Socket.io Config  
|--------------------------------------------------------------------------
| npm i --save socket.io
*/
export default {
  /*
  |--------------------------------------------------------------------------
  | Path
  |--------------------------------------------------------------------------
  |
  | The base path on which the socket.io server will accept connections.
  | Type {String}
  */
  path: "/expressweb-ws",

  /*
  |--------------------------------------------------------------------------
  | Serve Client
  |--------------------------------------------------------------------------
  |
  | Whether to serve the client files
  | Type {Boolean} 
  */
  serveClient: true,

  /*
  |--------------------------------------------------------------------------
  | Ping Timeout
  |--------------------------------------------------------------------------
  |
  | How many ms without a pong packet to consider the connection closed
  | Type {Number}
  */
  pingTimeout: 5000,

  /*
  |--------------------------------------------------------------------------
  | Ping Interval
  |--------------------------------------------------------------------------
  |
  | How many ms before sending a new ping packet
  |
  */
  pingInterval: 25000,

  /*
  |--------------------------------------------------------------------------
  | Upgrade Timeout
  |--------------------------------------------------------------------------
  |
  | How many ms before an uncompleted transport upgrade is cancelled
  |
  */
  upgradeTimeout: 10000,

  /*
  |--------------------------------------------------------------------------
  | MaxHttpBufferSize	
  |--------------------------------------------------------------------------
  |
  | How many bytes or characters a message can be, before closing the session (to avoid DoS).
  |
  */
  maxHttpBufferSize: 10e7,

  /*
  |--------------------------------------------------------------------------
  | Transports
  |--------------------------------------------------------------------------
  |
  | Transports to allow connections to
  |
  */
  transports: ["polling", "websocket"],

  /*
  |--------------------------------------------------------------------------
  | AllowUpgrades	
  |--------------------------------------------------------------------------
  |
  | Whether to allow transport upgrades
  |
  */
  allowUpgrades: true,

  /*
  |--------------------------------------------------------------------------
  | Socket Cors
  |--------------------------------------------------------------------------
  |
  | Whether to allow transport upgrades
  |
  */
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Origin", "Content-Type", "Content-Length", "Authorization", "Accept", "X-Requested-With"],
    credentials: true,
  },
};
