
exports.up = function(knex, Promise) {
  return knex.schema.createTable("statement", function(table){
    table.increments("id").primary();
    table.string("title").notNullable().defaultTo("");
    table.string("post").notNullable().defaultTo("");
    table.integer("user_id").notNullable().references("id").inTable("users").onDelete("cascade").index();
    table.timestamps(true,true);
  });

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("statement");
};
