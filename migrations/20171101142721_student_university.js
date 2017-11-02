
exports.up = function(knex, Promise) {
  return knex.schema.createTable("student_university", function(table){
    table.increments("id");
    table.integer("user_id").notNullable().references("id").inTable("users").onDelete("cascade").index();
    table.integer("university_id").notNullable().references("id").inTable("universities").onDelete("cascade").index();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("student_university");
};
