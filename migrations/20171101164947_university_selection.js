
exports.up = function(knex, Promise) {
  return knex.schema.createTable("university_selection", function(table){
    table.increments("id").primary();
    table.string("school_name").notNullable().defaultTo("");
    table.integer("user_id").notNullable().references("id").inTable("users").onDelete("cascade").index();
    table.timestamps(true,true);
  });

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("statement");
};
