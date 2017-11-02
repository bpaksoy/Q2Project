exports.up = function(knex, Promise) {
  return knex.schema.createTable("universities", function(table){
    table.increments("id").primary();
    table.string("school_name").notNullable().defaultTo("");
    table.string("description").notNullable().defaultTo("");
    table.integer("ranking").notNullable().defaultTo(0);
    table.float("tuition").notNullable().defaultTo(0);
    table.integer("acceptance_rate").notNullable().defaultTo(0);
    table.string("imgURL").notNullable();
    table.decimal("latitude", 9, 7).notNullable().defaultTo(0);
    table.decimal("longitude", 9, 7).notNullable().defaultTo(0);
    table.timestamps(true,true);
  });

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("universities");
};
