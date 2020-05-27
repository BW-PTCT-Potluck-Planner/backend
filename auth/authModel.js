const db = require('../data/config')
const bcrypt = require('bcryptjs')
module.exports = {
    find,
    findBy,
    insert    
}

function find() {
    return db('users')
}

function findBy(id) {
    return db('users')
        .select('id', 'username')
        .where({ id })
        .first()
}

async function insert(user) {
    user.password = await bcrypt.hash(user.password, 13)
    const [id] = await db('users').insert(user)
    return findBy(id)
}