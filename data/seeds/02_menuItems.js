
exports.seed = async function(knex) {
 await knex('menuItems').insert([
   { name: 'Tuna Casserole', events_id: 4},
   { name: 'Baked Beans', events_id: 3},
   { name: 'Cupcakes', events_id: 1},
   { name: 'Cake Pops', events_id:2 },
 ])
};
