"use strict";
const DatabaseConnection = require("container").resolve("connection");
require("dotenv").config();

const dbConnection = () => {
  /*
  |--------------------------------------------------------------------------
  | Sqlite
  |--------------------------------------------------------------------------
  |
  | Sqlite is a flat file database and can be good choice under development
  | environment.
  |
  | npm i --save sqlite3
  |
  */
  //   sqlite: {
  //     client: "sqlite3",
  //     connection: {
  //       filename: Helpers.databasePath(
  //         `${Env.get("DB_DATABASE", "development")}.sqlite`
  //       )
  //     },
  //     useNullAsDefault: true
  //   },

  /*
  |--------------------------------------------------------------------------
  | MySQL
  |--------------------------------------------------------------------------
  |
  | Here we define connection settings for MySQL database.
  |
  | npm i --save mysql
  | 
  | Using sequelize 
  | npm install --save mysql2
  |
  */
  const mysql = {
    client: "mysql",
    connection: {
      host: process.env.HOST_NAME,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE
    }
  };
  /*
  |--------------------------------------------------------------------------
  | PostgreSQL
  |--------------------------------------------------------------------------
  |
  | Here we define connection settings for PostgreSQL database.
  |
  | npm i --save pg
  | 
  | Using sequelize 
  | npm install --save pg pg-hstore
  |
  */
  const pg = {
    client: "Postgre",
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE
    }
  };
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
  const mongoose = {
    client: "mongoose",
    connection: {
      connection_link: `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`
    }
  };

  /*
  |--------------------------------------------------------------------------
  | Default Connection
  |--------------------------------------------------------------------------
  |
  | Connection defines the default connection settings to be used while
  | interacting with SQL databases.
  |
  */
  DatabaseConnection.connection(mysql);
};

module.exports = dbConnection();
