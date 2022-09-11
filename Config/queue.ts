"use strict";
import env from "expresswebcorets/lib/Env";

export default {
  /*
    |--------------------------------------------------------------------------
    | Default Queue Connection Name
    |--------------------------------------------------------------------------
    |
    | ExpressWebJs queue API supports an assortment of back-ends via a single
    | API, giving you convenient access to each back-end using the same
    | syntax for every one. Here you may define a default connection.
    |
    | `run npm install amqplib` to get started
    */

  default: env("QUEUE_CONNECTION", null),

  /*
    |--------------------------------------------------------------------------
    | Queue Connections
    |--------------------------------------------------------------------------
    |
    | Here you may configure the connection information for rabbitmq server that
    | is used by your application. A default configuration has been added.
    | ExpressWebJs currently supports rabbitmq for now.
    |
    | Driver: "rabbitmq"
    |
    */

  connections: {
    rabbitmq: {
      driver: "rabbitmq",
      connection: "default",
      queue: env("RABBITMQ_QUEUE", "default"),
      retry_after: 90,
      block_for: null,
      host: env("RABBITMQ_HOST"),
      port: env("RABBIT_PORT"),
    },
  },
};
