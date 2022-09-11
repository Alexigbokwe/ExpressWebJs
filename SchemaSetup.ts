"use strict";
import env from "expresswebcorets/lib/Env";
import config from "./Config/database";

class migration {
  constructor() {
    if (env("DB_CONNECTION") != "mongoose") {
      switch (env("DB_TENANT")) {
        case "tenant1":
        //return config.multitenant_tenants[0];
        case "tenant2":
        //return config.multitenant_tenants[1];
        case "null":
          return config[env("DB_CONNECTION")];
        default:
          throw Error("DB_TENANT is not specified in .env file");
      }
    }
  }
}
export default new migration();
