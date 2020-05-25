// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    useNullAsDefault: true,
    connection: 
       'process.env.DB_URL',
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/planner-test.db3',
    },
    useNullAsDefault: true,
  },
  migrations: {
    directory: './data/migrations',
  },
  seeds: {
    directory: './data/seeds',
  },
  // pool: {
  //   afterCreate: (conn, done) => {
  //     conn.run('PRAGMA foreign_keys = ON', done);
  //   },
  //},
  production: {
    client: 'pg',
    connection: process.env.DB_URL,
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/production'
    },
    useNullAsDefault: true
  },
}; 
