
exports.up = function(knex, Promise) {
  return knex.schema.createTable("students", function(table){
    table.increments("id").primary();
    table.integer("user_id").notNullable().references("id").inTable("users").onDelete("cascade").index();
    table.varchar("name").notNullable().defaultTo("");
    table.varchar("last_name").notNullable().defaultTo("");
    table.varchar("country").notNullable().defaultTo("");
    table.varchar("city").notNullable().defaultTo("");
    table.varchar("state").notNullable().defaultTo("");
    table.varchar("alma_mater").defaultTo("");
    table.decimal("gpa", 3, 2).defaultTo(0);
    table.integer("toefl", 3).defaultTo(0);
    table.decimal("ielts", 2, 1).defaultTo(0);
    table.integer("sat", 4).defaultTo(0);
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("students");
};
