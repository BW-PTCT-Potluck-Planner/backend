
exports.seed = async function(knex) {
  await knex('events').del()
  await knex('menuItems').del()
  await knex('users').del()
  await knex('events_menuItems').del()
}