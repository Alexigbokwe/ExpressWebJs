"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Env_1 = require("expresswebcorets/lib/Env");
exports.default = {
    /*
      |--------------------------------------------------------------------------
      | Default Queue Connection Name
      |--------------------------------------------------------------------------
      |
      | ExpressWebJs queue API supports a variety of back-ends via a single
      | API, giving you convenient access to each back-end using the same
      | syntax for every one. Here you may define a default connection.
      |
      */
    default: (0, Env_1.env)("QUEUE_CONNECTION", null),
    /*
      |--------------------------------------------------------------------------
      | Queue Connections
      |--------------------------------------------------------------------------
      |
      | Here you may configure the connection information for rabbitmq server that
      | is used by your application. A default configuration has been added.
      | ExpressWebJs currently supports rabbitmq for now.
      |
      | Currently Supported Drivers: "rabbitmq","redis".
      | Make sure to install the provider for each driver.
      | For rabbitmq, install provider via `npm i rabbitmq`
      | For redis, install provider via `npm i bull`
      |
      */
    connections: {
        rabbitmq: {
            driver: "rabbitmq",
            connection: "default",
            queue: (0, Env_1.env)("RABBITMQ_QUEUE", "default"),
            retry_after: 90,
            block_for: null,
            host: (0, Env_1.env)("RABBITMQ_HOST"),
            port: (0, Env_1.env)("RABBITMQ_PORT"),
        },
        redis: {
            driver: "redis",
            connection: "default",
            queue: (0, Env_1.env)("REDIS_QUEUE", "default"),
            password: (0, Env_1.env)("REDIS_PASSWORD"),
            host: (0, Env_1.env)("REDIS_HOST"),
            port: (0, Env_1.env)("REDIS_PORT"),
        },
    },
};
