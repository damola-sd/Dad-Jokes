
exports.up = function(knex) {
  return knex.schema
    .createTable('users', table => {
        table
            .increments();
        table
            .text('email', 128)
            .unique()
            .notNullable();

        table
            .text('username', 128)
            .unique()
            .notNullable();
        table
            .text('password', 256).notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('users');
};
