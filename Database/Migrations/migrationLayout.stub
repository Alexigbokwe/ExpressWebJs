/**
 * Migration layout file.
 * Assign your table name to the tableName variable.
 * Remember, it's always in plural
 */
let tableName = "";
exports.up = function (knex) {
  return knex.schema.createTable(tableName, (table) => {
    table.increments("id");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
