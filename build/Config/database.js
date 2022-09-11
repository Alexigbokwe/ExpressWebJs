"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Env_1 = require("expresswebcorets/lib/Env");
const Path_1 = require("expresswebcorets/lib/Utils/Path");
exports.default = {
    /*
    |--------------------------------------------------------------------------
    | Database Multitenance
    |--------------------------------------------------------------------------
    |
    | Database multitenace can be activated by switching the value to true and can
    | be deactivated by switching it to false.
    |
    */
    database_multitenance: (0, Env_1.env)("DB_MULTITENANCE", false),
    /*
    |--------------------------------------------------------------------------
    | Multitenance Connections
    |--------------------------------------------------------------------------
    |
    | Database multitenace connection enables interaction with multiple
    | SQL databases where each database is a tenant in your system.
    | The tenant array accepts an object of database connections (tenants).
    |
    */
    multitenant_tenants: [],
    /*
    |--------------------------------------------------------------------------
    | MySQL Database
    |--------------------------------------------------------------------------
    |
    | Here we define connection settings for MySQL database.
    |
    | npm i --save mysql mysql2
    |
    */
    mysql: {
        client: "mysql",
        connection: {
            host: (0, Env_1.env)("DB_HOST"),
            port: (0, Env_1.env)("DB_PORT"),
            user: (0, Env_1.env)("DB_USER"),
            password: (0, Env_1.env)("DB_PASSWORD"),
            database: (0, Env_1.env)("DB_DATABASE"),
        },
        migrations: {
            directory: (0, Path_1.Path)("../Database/Migrations/"),
            tableName: "migrations",
            stub: (0, Path_1.Path)("../Database/Migrations/migrationLayout.stub"),
            extension: "ts",
        },
        seeds: {
            directory: (0, Path_1.Path)("../Database/Seeds/"),
        },
    },
    /*
    |--------------------------------------------------------------------------
    | PostgreSQL Database
    |--------------------------------------------------------------------------
    |
    | Here we define connection settings for PostgreSQL database.
    |
    | npm i --save pg
    |
    | npm install --save pg pg-hstore
    |
    */
    pg: {
        client: "pg",
        connection: {
            host: (0, Env_1.env)("DB_HOST"),
            port: (0, Env_1.env)("DB_PORT"),
            user: (0, Env_1.env)("DB_USER"),
            password: (0, Env_1.env)("DB_PASSWORD"),
            database: (0, Env_1.env)("DB_DATABASE"),
        },
        migrations: {
            directory: (0, Path_1.Path)("../Database/Migrations/"),
            tableName: "migrations",
            stub: (0, Path_1.Path)("../Database/Migrations/migrationLayout.stub"),
            extension: "ts",
        },
        seeds: {
            directory: (0, Path_1.Path)("../Database/Seeds/"),
        },
    },
    /*
    |--------------------------------------------------------------------------
    | MongoDB Database
    |--------------------------------------------------------------------------
    |
    | Here we define connection settings for MongoDB database.
    |
    | npm i --save mongoose
    |
    */
    mongoose: {
        client: "mongoose",
        host: (0, Env_1.env)("DB_HOST"),
        port: (0, Env_1.env)("DB_PORT"),
        user: (0, Env_1.env)("DB_USER"),
        password: (0, Env_1.env)("DB_PASSWORD"),
        database: (0, Env_1.env)("DB_DATABASE"),
        useCreateIndex: (0, Env_1.env)("DB_USECREATEINDEX"),
        useNewUrlParser: (0, Env_1.env)("DB_USENEWURLPARSER"),
        useUnifiedTopology: (0, Env_1.env)("DB_USEUNIFIEDTOPOLOGY"),
        connection: {
            connection_link: `mongodb://${(0, Env_1.env)("DB_USER")}:${(0, Env_1.env)("DB_PASSWORD")}@${(0, Env_1.env)("DB_HOST")}:${(0, Env_1.env)("DB_PORT")}/${(0, Env_1.env)("DB_DATABASE")}`,
        },
    },
    /*
    |--------------------------------------------------------------------------
    | Redis Database
    |--------------------------------------------------------------------------
    |
    | Here we define connection settings for Redis database.
    |
    | npm i --save ioredis
    |
    */
    redis: {
        client: (0, Env_1.env)("REDIS_CLIENT", "default"),
        default: {
            host: (0, Env_1.env)("REDIS_HOST", "127.0.0.1"),
            port: (0, Env_1.env)("REDIS_PORT", 6379),
            password: (0, Env_1.env)("REDIS_PASSWORD", null),
            database: (0, Env_1.env)("REDIS_DB", 0),
        },
        cache: {
            host: (0, Env_1.env)("REDIS_HOST", "127.0.0.1"),
            port: (0, Env_1.env)("REDIS_PORT", 6379),
            password: (0, Env_1.env)("REDIS_PASSWORD", null),
            database: (0, Env_1.env)("REDIS_DB", 0),
        },
    },
    /*
    |--------------------------------------------------------------------------
    | Default Connection
    |--------------------------------------------------------------------------
    |
    | Connection defines the default connection settings to be used while
    | interacting with databases.
    | list of connections : mysql, mongoose
    |
    */
    Default_connection: (0, Env_1.env)("DB_CONNECTION"),
};
