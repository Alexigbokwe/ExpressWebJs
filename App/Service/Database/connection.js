var con = null;
class DatabaseConnection {
  connection(database) {
    if (database.client == "mysql") {
      this.mysql(database);
    } else if (database.client == "pg") {
      this.pg(database);
    }
  }

  mysql(database) {
    const mysql = require("mysql");
    con = mysql.createConnection(database.connection);
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
    });
    return con;
  }

  pg(database) {
    const pg = require("pg");
    // con = pg.createConnection(database.connection);
    // con.connect(function(err) {
    //   if (err) throw err;
    //   console.log("Connected!");
    // });
    // return con;
  }
}

module.exports = DatabaseConnection;
