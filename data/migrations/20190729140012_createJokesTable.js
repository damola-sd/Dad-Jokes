
exports.up = function(knex) {
  return knex.schema
    .createTable('jokes', jokes => {
        jokes.increments();
        jokes.text('joke', 1000).notNullable();
        jokes.enu('status', ['public', 'private']).defaultTo('public');
        jokes.integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users');
    })
};

exports.down = function(knex) {
  return knex.schema   
    .dropTableIfExists('jokes')
};
