const bodyParser = require("body-parser");
require("module-alias/register");
require("@config/database");
require("@path/path");
const API = require("@api/api");
API.listen(5100);
