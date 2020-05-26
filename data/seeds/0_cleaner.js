
exports.seed = async function(knex) {
  await knex('events').truncate()
  await knex('users').truncate()
  await knex('menuItems').truncate()
  await knex('events_menuItems').truncate()
}