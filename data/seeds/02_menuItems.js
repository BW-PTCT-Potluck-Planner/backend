
exports.seed = async function(knex) {
 await knex('menuItems').insert([
   { name: 'Tuna Casserole'},
   { name: 'Baked Beans'},
   { name: 'Cupcakes'},
   { name: 'Cake Pops'},
 ])
};
