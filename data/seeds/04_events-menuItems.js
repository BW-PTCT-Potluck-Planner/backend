
exports.seed = function(knex) {
 return knex('events_menuItems').insert([
   { events_id: 1, menuItems_id: 4},
   { events_id: 2, menuItems_id: 3},
   { events_id: 3, menuItems_id: 1},
   { events_id: 4, menuItems_id: 2},
 ])
};
