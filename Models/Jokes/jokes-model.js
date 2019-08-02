const  db = require('../../data/dbConfig');

module.exports = {
    insert,
    update,
    findByUserId,
    findById,
    getPublicJokes,
    getPublicJokesById,
    remove
}

async function insert(userId, body) {
    let { joke, status } = body;
    const [id] = await db('jokes').insert({ joke: joke, status: status, user_id: userId});

  return db('jokes').where({ id }).first();
}

async function update(id, changes) {
    return db('jokes').where({ id }).update(changes);
  }

function findByUserId(id) {
    return db('jokes').where({ user_id: id });
}

function findById(id) {
    return db('jokes').where({ id });
}

function getPublicJokes() {
    return db('jokes').where({ status: 'public' })
}

function getPublicJokesById(id) {
    return db('jokes').where({ status: 'public' , id})
}

function remove(id) {
    return db('jokes').where({ id }).del();
}