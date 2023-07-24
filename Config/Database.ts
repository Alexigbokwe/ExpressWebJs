import * as objection from "objection";
import { env, orm } from "expresswebcorets/lib/Env";
import { Path } from "expresswebcorets/lib/Utils/Path";
import { DBConnection, ObjectionConfigurationType } from "expresswebcorets/lib/Database/DataSourceConfig";

export default {
  /*
  |--------------------------------------------------------------------------
  | Database ORM
  |--------------------------------------------------------------------------
  | ExpressWeb currently supports the following Object Relational Mappers(ORM)
  | Objection and TypeORM for sql databases and  Mongoose for mongo DB.
  | You need to select one depending on the type of database you are working on.
  |
  */
  ORM: env("ORM", orm.Objection),

  /*
  |--------------------------------------------------------------------------
  | Database Provider
  |--------------------------------------------------------------------------
  | With respect to the orm you selected, you need to import the provider and
  | assign it to provider.
  | Example:
  | for objection, import * as objection from "objection"
  | for typeorm, import * as typeorm from "typeorm"
  | Then assign typeorm to provider like this:
  | provider: typeorm
  |
  */
  provider: objection,

  /*
  |--------------------------------------------------------------------------
  | Database Multitenance
  |--------------------------------------------------------------------------
  | Database multitenance can be activated by switching the value to true and can
  | be deactivated by switching it to false.
  |
  */
  database_multitenance: env("DB_MULTITENANCE", false),
  /*
  |--------------------------------------------------------------------------
  | Multitenance Connections
  |--------------------------------------------------------------------------
  | Database multitenance connection enables interaction with multiple
  | SQL databases where each database is a tenant in your system.
  | The tenant array accepts an object of database connections (tenants).
  |
  */
  multitenant_tenants: DBConnection.multitenant<ObjectionConfigurationType>("Objection", []),

  /*
  |--------------------------------------------------------------------------
  | Database Connection
  |--------------------------------------------------------------------------
  | Here we define connection settings for both TypeORM, Objection, and mongoose.
  | For typeORM, npm i --save typeorm
  | For Objection, npm i --save objection
  | For Mongoose, npm i --save mongoose
  | --------------------------------------------------------------------------
  | For SQL db, install the driver of your choice
  | mysql driver, npm i --save mysql mysql2
  | postgres driver, npm i --save pg pg-hstore
  |
  */
  connection: DBConnection.connect<ObjectionConfigurationType>({
    client: env("DB_DRIVER"),
    connection: {
      host: env("DB_HOST"),
      port: env("DB_PORT"),
      user: env("DB_USER"),
      password: env("DB_PASSWORD"),
      database: env("DB_DATABASE"),
    },
  }),

  /*
  |--------------------------------------------------------------------------
  | Migration Configuration
  |--------------------------------------------------------------------------
  | Here we have database migration configuration.
  | Which includes the following:
  */
  migrations: {
    directory: Path("Database/Migrations/"),
    tableName: "migrations",
    stub: Path("Database/Migrations/migrationLayout.stub"),
    extension: "ts",
  },

  /*
  |--------------------------------------------------------------------------
  | Seed Configuration
  |--------------------------------------------------------------------------
  | Here we have database seed configuration.
  | Which includes the following:
  */
  seeds: {
    directory: Path("Database/seeds/"),
  },

  /*
  |--------------------------------------------------------------------------
  | Redis Connection
  |--------------------------------------------------------------------------
  | Here we define connection settings for Redis database.
  | npm i --save ioredis
  */
  redis: {
    client: env("REDIS_CLIENT", "default"),

    default: {
      host: env("REDIS_HOST", "127.0.0.1"),
      port: env("REDIS_PORT", 6379),
      password: env("REDIS_PASSWORD", null),
      database: env("REDIS_DB", 0),
    },

    cache: {
      host: env("REDIS_HOST", "127.0.0.1"),
      port: env("REDIS_PORT", 6379),
      password: env("REDIS_PASSWORD", null),
      database: env("REDIS_DB", 0),
    },
  },
};
