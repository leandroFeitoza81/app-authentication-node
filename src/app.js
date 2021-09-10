require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

const express = require('express');
const app = express();
const { users } = require('../src/models');

users.create({
  name: 'Leandro',
  last_name: 'Feitoza',
  username: 'leandro',
  password: '123',
});

console.log(users);

module.exports = app;
