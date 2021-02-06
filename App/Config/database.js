"use strict";

module.exports = {
  /* 
  |--------------------------------------------------------------------------
  | MySQL
  |--------------------------------------------------------------------------
  |
  | Here we define connection settings for MySQL database.
  |
  | npm i --save mysql
  |
  | npm install --save mysql2
  |
  */
  mysql: {
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    },
    migrations: {
      directory: __dirname + "/../../Database/Migrations/",
      tableName: "migrations",
      stub: __dirname + "/../../Database/Migrations/migrationLayout.stub",
    },
  },
  /*
  |--------------------------------------------------------------------------
  | PostgreSQL
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
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    },
    migrations: {
      directory: __dirname + "/../../Database/Migrations/",
      tableName: "migrations",
      stub: __dirname + "/../../Database/Migrations/migrationLayout.stub",
    },
  },
  /*
  |--------------------------------------------------------------------------
  | MongoDB
  |--------------------------------------------------------------------------
  |
  | Here we define connection settings for MongoDB database.
  |
  | npm i --save mongoose
  |
  */
  mongoose: {
    client: "mongoose",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    useCreateIndex: process.env.DB_USECREATEINDEX,
    useNewUrlParser: process.env.DB_USENEWURLPARSER,
    useUnifiedTopology: process.env.DB_USEUNIFIEDTOPOLOGY,
    connection: {
      connection_link: `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`,
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
  Default_connection: process.env.DB_CONNECTION,
};
