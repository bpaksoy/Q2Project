
exports.up = function(knex, Promise) {
  return knex.schema.createTable("students", function(table){
    table.increments("id").primary();
    table.varchar("name").notNullable().unique().defaultTo("");
    table.varchar("last_name").notNullable().unique().defaultTo("");
    table.varchar("country").notNullable().unique().defaultTo("");
    table.varchar("alma_mater").notNullable().unique().defaultTo("");
    table.integer("gpa", 3, 2).defaultTo(0);
    table.integer("toefl", 3).defaultTo(0);
    table.integer("ielts", 2, 1).defaultTo(0);
    table.integer("act", 2).defaultTo(0);
    table.integer("sat", 4).defaultTo(0);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("students");
};
