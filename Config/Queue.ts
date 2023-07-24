import { env, queueProviders } from "expresswebcorets/lib/Env";

export default {
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

  default: env("QUEUE_CONNECTION", null),

  /*
    |--------------------------------------------------------------------------
    | Queue Connections
    |--------------------------------------------------------------------------
    |
    | Here you may configure the connection information for rabbitmq or redis
    | server that is used by your application. A default configuration has been added.
    | ExpressWebJs currently supports rabbitmq and redis for now. 
    |
    | Currently Supported Drivers: "rabbitmq","redis".
    | Make sure to install the provider for each driver.
    | For rabbitmq, install provider via `npm i rabbitmq`
    | For redis, install bull via `npm i bull`
    | or Bullmq via `npm i bullmq`
    |
    */

  connections: {
    rabbitmq: {
      driver: "rabbitmq",
      provider: null,
      provider_name: queueProviders.RABBITMQ,
      connection: "default",
      queue: env("RABBITMQ_QUEUE", "default"),
      retry_after: 90,
      block_for: null,
      host: env("RABBITMQ_HOST"),
      port: env("RABBITMQ_PORT"),
    },
    redis: {
      driver: "redis",
      provider: null,
      provider_name: queueProviders.BullMQ,
      connection: "default",
      queue: env("REDIS_QUEUE", "default"),
      password: env("REDIS_PASSWORD"),
      host: env("REDIS_HOST"),
      port: env("REDIS_PORT"),
    },
  },
};
