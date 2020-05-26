
exports.seed = async function(knex) {
  await knex('users').insert([
    { username: 'Charlie', password: 'delta1', events_id: 1 },
    { username: 'Fox', password: 'golf2', events_id: 3 },
  ])

};
