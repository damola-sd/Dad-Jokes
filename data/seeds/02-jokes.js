
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('jokes').del()
    .then(function () {
      // Inserts seed entries
      return knex('jokes').insert([
        {joke: "Today, my son asked 'Can I have a book mark?' and I burst into tears 11 years old and he still doesn't know my name is Brian", status: 'public', user_id: 1},
        {joke: 'My wife is really mad at the fact that I have no sense of direction. So I packed up my stuff and right', status: 'private', user_id: 1},
        {joke: 'How do you make holy water? You boil the hell out of it', status: 'public', user_id: 1},
        {joke: "I bought some shoes from a drug dealer. I don't know what he laced them with, but i was tripping all day", status: 'private', user_id: 1}
      ]);
    });
};
