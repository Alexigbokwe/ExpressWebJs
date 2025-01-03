import { env } from "expresswebcorets/lib/Env";
import { DBConnection } from "expresswebcorets/lib/Database/DataSourceConfig";
import DataBaseConfig from "Config/Database";

const MigrationRunner = DBConnection.prepareSchemaRunner(env("DB_TENANT"), DataBaseConfig);
export default MigrationRunner;
