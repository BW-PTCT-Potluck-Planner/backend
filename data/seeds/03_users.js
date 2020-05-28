
exports.seed = async function(knex) {
  await knex('users').insert([
    { username: 'Charlie', password: 'delta1'},
    { username: 'Fox', password: 'golf2' },
  ])

};
