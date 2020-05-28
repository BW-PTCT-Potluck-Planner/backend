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

function findBy(query) {
    return db('users')
        .where(query)
        .first()
}

async function insert(user) {
    user.password = await bcrypt.hash(user.password, 13)
    console.log()
    await db('users').insert(user);
    const { password, ...data } = await findBy({ username: user.username })
    return data
}

