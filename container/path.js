const path = require("path");

module.exports = {
  config: path.resolve("../App/Config", "database.json"),
  "models-path": path.resolve("../App/Model", "models"),
  "seeders-path": path.resolve("../Database/Seeds", "seeders"),
  "migrations-path": path.resolve("../Database/Migrations", "migrations")
};
