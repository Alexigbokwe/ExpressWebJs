"use strict";
require("dotenv").config();
let config = require("./App/Config/database");
class migration {
  constructor() {
    if (process.env.DB_CONNECTION != "mongoose")
      return config[process.env.DB_CONNECTION];
  }
}
module.exports = new migration();
