/*
|--------------------------------------------------------------------------
| Maker Commands
|--------------------------------------------------------------------------
|
| When we run the console application, the current CLI command will be
| executed in the console and the response sent back to the terminal.
| Register Maker Commands using their unique namespace.
|
*/
const commands = [
  "ExpressWebJs/commands/make-auth",
  "ExpressWebJs/commands/make-controller",
  "ExpressWebJs/commands/make-event",
  "ExpressWebJs/commands/make-listener",
  "ExpressWebJs/commands/make-sql-model",
  "ExpressWebJs/commands/make-nosql-model",
  "ExpressWebJs/commands/make-route",
  "ExpressWebJs/commands/make-middleware",
  "ExpressWebJs/commands/make-validation",
  "ExpressWebJs/commands/make-sql-migration",
  "ExpressWebJs/commands/make-ws-controller",
  "ExpressWebJs/commands/run-sql-migration",
  "ExpressWebJs/commands/show-sql-list",
  "ExpressWebJs/commands/sql-rollback",
  "ExpressWebJs/commands/sql-rollup",
  "ExpressWebJs/commands/sql-rolldown",
  "ExpressWebJs/commands/make-command",
  "ExpressWebJs/commands/run-schedule",
  "ExpressWebJs/commands/queue-work",
  "ExpressWebJs/commands/make-identity",
  "ExpressWebJs/commands/make-service",
  "ExpressWebJs/commands/make-job",
  "ExpressWebJs/commands/make-provider",
  "ExpressWebJs/commands/make-rule",
  "ExpressWebJs/commands/run-dev",
  "ExpressWebJs/commands/run-build",
  "ExpressWebJs/commands/run-start",
  "ExpressWebJs/commands/make-domain",
  "ExpressWebJs/commands/domain:make-controller",
  "ExpressWebJs/commands/domain:make-model",
];

export default commands;
