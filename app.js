const bodyParser = require("body-parser");
require("module-alias/register");
require("@config/database");
require("@path/path");
require("@api/api");
const api_port = require("@api/port");
api_port(5000);
