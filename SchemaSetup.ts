import { env } from "expresswebcorets/lib/Env";
import { DBConnection } from "expresswebcorets/lib/Database/DataSourceConfig";

DBConnection.prepareSchemaRunner(env("DB_TENANT"));
