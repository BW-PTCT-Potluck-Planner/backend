exports.seed = async function (knex) {
  await knex('menuItems').insert([
    { id: '1', name: 'Tuna Casserole', events_id: '4' },
    { id: '2', name: 'Baked Beans', events_id: '3' },
    { id: '3', name: 'Cupcakes', events_id: '1' },
    { id: '4', name: 'Cake Pops', events_id: '2' },
  ]);
};
