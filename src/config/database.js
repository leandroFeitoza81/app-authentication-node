require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_SCHEMA,
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
    operatorAliases: false,
    logging: false,
    define: {
      timestamps: false,
    },
  },
  test: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_SCHEMA,
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
    operatorAliases: false,
    logging: false,
    define: {
      timestamps: false,
    },
  },
};
