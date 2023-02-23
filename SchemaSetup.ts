import { env, orm } from "expresswebcorets/lib/Env";
import { DBConnection } from "expresswebcorets/lib/Database/DataSourceConfig";
import config from "./Config/database";

class MigrationBuilder {
  constructor() {
    if (config.database_multitenance == "true" && config.ORM != orm.Mongoose) {
      let multitenantMigration = config.multitenant_tenants.connections.filter((connection) => connection.tenantName === env("DB_TENANT"));
      return DBConnection.multitenantMigration(multitenantMigration[0]);
    } else {
      console.log("nope");
      return DBConnection.migration(config.connection);
    }
  }
}
export default new MigrationBuilder();
