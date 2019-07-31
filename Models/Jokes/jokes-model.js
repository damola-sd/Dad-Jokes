const  db = require('../../data/dbConfig');

module.exports = {
    insert,
    update,
    findByUserId,
    getPublicJokes,
    remove
}

async function insert(id, joke) {
    const [id] = await db('jokes').insert(...joke, {user_id: id});

  return db('jokes').where({ id }).first();
}

async function update(id, changes) {
    return db('jokes').where({ id }).update(changes);
  }

function findByUserId(id) {
    return db('jokes').where({ user_id: id });
}

function getPublicJokes() {
    return db('jokes').where({ status: 'public' })
}

function remove(id) {
    return db('jokes').where({ id }).del();
}