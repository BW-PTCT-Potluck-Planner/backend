const db = require('../data/config')

module.exports = {
    find,
    findBy,
    add,
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