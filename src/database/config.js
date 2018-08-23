module.exports = {
    development: {
        username: 'user',
        password: 'password',
        database: 'myDB',
        host: 'host',
        dialect: 'mssql'
    },
    test: {
    /*  dialect: "sqlite",
      storage: ":memory:"
    */
      username: 'user',
        password: 'password',
        database: 'myDB',
        host: 'host',
        dialect: 'mssql'
    },
    production: {
      username: 'user',
      password: 'password',
      database: 'myDB',
      host: 'host',
      dialect: 'mysql'
    }
  };