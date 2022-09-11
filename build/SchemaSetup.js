"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Env_1 = require("expresswebcorets/lib/Env");
const database_1 = (0, tslib_1.__importDefault)(require("./Config/database"));
class migration {
    constructor() {
        if ((0, Env_1.env)("DB_CONNECTION") != "mongoose") {
            switch ((0, Env_1.env)("DB_TENANT")) {
                case "tenant1":
                //return config.multitenant_tenants[0];
                case "tenant2":
                //return config.multitenant_tenants[1];
                case "null":
                    return database_1.default[(0, Env_1.env)("DB_CONNECTION")];
                default:
                    throw Error("DB_TENANT is not specified in .env file");
            }
        }
    }
}
exports.default = new migration();
