
exports.seed = async function(knex) {
  await knex('users').insert([
    { username: 'Charlie', password: 'delta1', menuItems_id: 1 },
    { username: 'Fox', password: 'golf2', menuItems_id: 3 },
  ])

};
