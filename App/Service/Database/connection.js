var con = null;
class DatabaseConnection {
  connection(database) {
    if (database.client == "mysql") {
      this.mysql(database);
    } else if (database.client == "postgre") {
      this.postgre(database);
    } else if (database.client == "mongoose") {
      this.mongo(database);
    }
  }

  sequelizeORM(dialect, dbDetails) {
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
          idle: 10000
        },

        // SQLite only
        storage: "path/to/database.sqlite"

        //operatorsAliases: false
      }
    );
    global.sequelize = sequelize;
  }

  mysql(database) {
    var mysql = null;
    if (require("mysql2")) {
      var mysql = require("mysql2");
    } else {
      var mysql = require("mysql");
    }

    con = mysql.createConnection(database.connection);
    con.connect(function(err) {
      if (err) throw err;
      console.log("DB Connected!");
    });
    this.sequelizeORM("mysql", database.connection);
    global.db = con;
    return con;
  }

  postgre(database) {
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

  mongo(database) {
    var mongoose = require("mongoose");
    mongoose.connect(database.connection.connection_link, function(err, db) {
      if (err) throw err;
      console.log("DB Connected!");
      con = db;
    });
    global.db = con;
    return con;
  }
}

module.exports = DatabaseConnection;
