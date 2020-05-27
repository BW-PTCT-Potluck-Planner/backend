exports.seed = async function (knex) {
  await knex('users').insert([
    { id: '1', username: 'Charlie', password: 'delta1', events_id: '1' },
    { id: '2', username: 'Fox', password: 'golf2', events_id: '3' },
  ]);
};
