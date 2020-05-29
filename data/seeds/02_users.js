exports.seed = async function (knex) {
  await knex('users').insert([
    { id: '1', username: 'Charlie', password: 'delta1'  },
    { id: '2', username: 'Fox', password: 'golf2'  },
  ]);
};
