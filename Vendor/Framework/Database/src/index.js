"use strict";
require("dotenv").config();
/*
 * expressweb-database-sucket
 *
 * (c) Alex Igbokwe <chukwuemekaigbokwe80@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const defaultConfig = require("@config/database.js");
var connection = null;

/**
 * Database connection class to manager
 * based upon configurations saved inside `config/database.js`
 * file.
 *
 *
 * @class DatabaseConnection
 * @constructor
 */
class DatabaseConnection {
  constructor() {
    this.options = defaultConfig;
    switch (this.options.Default_connection) {
      case "mysql":
        this._mysql(this.options.mysql);
        break;
      case "postgre":
        this._postgre(this.options.pg);
        break;
      case "mongoose":
        this._mongo(this.options.mongoose);
        break;
      default:
        this._error();
    }
  }

  /**
   * Mongo DB connection
   *
   * @method _mongo
   *
   * @param {Object} database
   *
   * @private
   */
  _mongo(database) {
    var mongoose = require("mongoose");
    var link = "";
    if (!database.user && !database.password) {
      link =
        "mongodb://" +
        database.host +
        ":" +
        database.port +
        "/" +
        database.database;
    } else {
      link = database.connection.connection_link;
    }
    mongoose.connect(
      link,
      {
        useNewUrlParser: database.useNewUrlParser,
        useUnifiedTopology: database.useUnifiedTopology,
      },
      function (err, db) {
        if (err) throw err;
        //console.log("DB Connected!");
        connection = db;
      }
    );
    global.db = connection;
    return connection;
  }

  /**
   * MySql DB connection
   *
   * @method _mysql
   *
   * @param {Object} database
   *
   * @private
   */
  _mysql(database) {
    var mysql = null;
    if (require("mysql2")) {
      var mysql = require("mysql2");
    } else {
      var mysql = require("mysql");
    }

    connection = mysql.createConnection(database.connection);
    connection.connect(function (err) {
      if (err) throw err;
      //console.log("DB Connected!");
    });
    this._sequelizeORM("mysql", database.connection);
    global.db = connection;
    return connection;
  }

  /**
   * sequelizeORM connection
   *
   * @method _sequelizeORM
   *
   * @param {Object} dialect
   *
   * @param {Object} dbDetails
   *
   * @private
   */
  _sequelizeORM(dialect, dbDetails) {
    const Sequelize = require("sequelize");
    const sequelize = new Sequelize(
      dbDetails.database,
      dbDetails.username,
      dbDetails.password,
      {
        host: dbDetails.host,
        dialect: dialect,

        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000,
        },

        // SQLite only
        storage: "path/to/database.sqlite",

        //operatorsAliases: false
      }
    );
    global.sequelize = sequelize;
  }

  /**
   * Postgre DB connection
   *
   * @method _postgre
   *
   * @param {Object} database
   *
   * @private
   */
  _postgre(database) {
    var postgre = require("pg");
    // con = postgre.createConnection(database.connection);
    // con.connect(function(err) {
    //   if (err) throw err;
    //   console.log("DB Connected!");
    // });
    // this.sequelizeORM("postgres",database.connection);
    // global.db = con;
    // return con;
  }

  _error() {
    console.log(
      "Database is not supported. Please visit App/config/database.js to see supported database"
    );
  }
}

module.exports = new DatabaseConnection();
