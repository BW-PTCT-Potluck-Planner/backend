const db = require('../data/config')

module.exports = {
    find,
    findBy,
    add,
    remove,
    update
}

function find() {
    return db('events')
}

function findBy(id) {
    return db('events')
        .where({ id })
        .first()
}

async function add(data) {
    const [id] = await db('events')
        .insert(data, 'id')
    return db('events')
        .where({ id })
        .first()
}

function remove(id) {
    return db('events')
        .where({ id })
        .delete()

}
async function update(id, changes) {
    const [newId] = await db('events')
        .where({ id })
        .update(changes, 'id')
    return db('events')
        .where({ id: newId })
        .first()

}