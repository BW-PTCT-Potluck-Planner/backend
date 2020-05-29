exports.up = async function (knex) {
  await knex.raw('create extension if not exists "uuid-ossp"');
  await knex.schema.createTable('events', (table) => {
    //primary table with events
    table.string('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('name').notNullable();
    table.string('description', 256).notNullable();
    table.string('location').notNullable();
    table.string('when').notNullable();
  });
  //create menu items table
  await knex.schema.createTable('menuItems', (table) => {
    table.string('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('name', 128).notNullable().unique();
    table
      .string('events_id')
      .notNullable()
      .references('id')
      .inTable('events')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
  //create users table
  await knex.schema.createTable('users', (table) => {
    table.string('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('username', 20).notNullable().unique();
    table.string('password').notNullable();
    
  });
  //create intermediary table to join users & menu-items
  await knex.schema.createTable('events_menuItems', (table) => {
    table
      .string('events_id')
      .notNullable()
      .references('id')
      .inTable('events')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table
      .string('menuItems_id')
      .notNullable()
      .references('id')
      .inTable('menuItems')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table.primary(['events_id', 'menuItems_id']);
  });
  await knex.schema.createTable('events_guest', (table) => {
    table.string('events_id')
      .notNullable()
      .references('id')
      .inTable('events')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table
      .string('guest_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table.primary(['events_id', 'guest_id']);
  })
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('events_guest');
  await knex.schema.dropTableIfExists('events_menuItems');
  await knex.schema.dropTableIfExists('users');
  await knex.schema.dropTableIfExists('menuItems');
  await knex.schema.dropTableIfExists('events');
  await knex.raw('drop extension if exists "uuid-ossp"');
};
