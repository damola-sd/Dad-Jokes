const  db = require('../../data/dbConfig');


module.exports = {
    createUser,
    update,
    findById,
    remove
}
async function createUser(user) {
    const [id] = await db('users').insert(user);

  return db('users').where({ id }).first();
}

async function update(id, changes) {
    return db('users').where({ id }).update(changes);
  }

function findById(id) {
    return db('users').where({ id });
}

function remove(id) {
    return db('users').where({ id }).del();
}