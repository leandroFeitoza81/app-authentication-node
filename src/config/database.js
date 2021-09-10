require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

const { MYSQL_USER, MYSQL_PASSWORD, MYSQL_SCHEMA, MYSQL_HOST } = process.env;

module.exports = {
  development: {
    username: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_SCHEMA,
    host: MYSQL_HOST,
    dialect: 'mysql',
    operatorAliases: false,
    logging: false,
    define: {
      timestamps: false,
    },
  },
  test: {
    username: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_SCHEMA,
    host: MYSQL_HOST,
    dialect: 'mysql',
  },
};
