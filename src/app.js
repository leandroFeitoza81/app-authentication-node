require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

const express = require('express');
const app = express();
const routes = require('./routes');
const { users } = require('../src/models');

app.use(express.json());
app.use('/api', routes);

module.exports = app;
