
exports.up = function(knex, Promise) {
  return knex.schema.createTable("programs", function(table){
    table.increments("id").primary();
    table.string("program_name").notNullable().defaultTo("");
    table.integer("user_id").notNullable().references("id").inTable("users").onDelete("cascade").index();
    table.timestamps(true,true);
  });

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("programs");
};
