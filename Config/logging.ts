"use strict";
import env from "expresswebcorets/lib/Env";

export default {
  /*
    |--------------------------------------------------------------------------
    | Default Log Channel
    |--------------------------------------------------------------------------
    |
    | This option defines the default log channel that gets used when writing
    | messages to the logs. The name specified in this option should match
    | one of the channels defined in the "channels" configuration array.
    |
    */

  default: env("LOG_CHANNEL", "console"),

  /*
    |--------------------------------------------------------------------------
    | Log Channels
    |--------------------------------------------------------------------------
    |
    | Here you may configure the log channels for your application. Out of
    | the box, ExpressWebJs supports Console and file
    |
    */

  logLevel: "debug",

  channels: {
    console: {
      type: "console",
      category: "console",
    },

    file: {
      category: "system-log",
      type: "file",
      filename: "Logs/systemLog.log",
      maxLogSize: 10240,
      backups: 3,
      flag: "w",
      pattern: "yyyy-MM-dd",
    },
  },
};
