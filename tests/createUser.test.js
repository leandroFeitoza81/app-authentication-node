const request = require('supertest');
const app = require('../src/app');
const { expect } = require('chai');
const truncate = require('./utils/truncate');
const shell = require('shelljs');

describe('Test the route [POST] "/api/users/register"', () => {
  beforeEach(() => {
    shell.exec('NODE_ENV=test yarn sequelize-cli db:drop');
    shell.exec('NODE_ENV=test yarn sequelize-cli db:create');
    shell.exec('NODE_ENV=test yarn sequelize-cli db:migrate');
    shell.exec('NODE_ENV=test yarn sequelize-cli db:seed:all');
  });

  it('Test it if is possible register a user', async () => {
    const user = {
      name: 'Tom',
      last_name: 'York',
      username: 't.york',
      password: '123456',
    };

    const response = await request(app).post('/api/users').send(user);
    expect(response.statusCode).to.equal(201);
    expect(response.body).to.be.a('object');
    expect(response.body).to.be.include({
      name: 'Tom',
      last_name: 'York',
      username: 't.york',
      password: '123456',
    });
  });

  it('Test return when invalid data sending', async () => {
    const response = await request(app).post('/api/users').send({
      id: 1,
      name: 'Tom',
      last_name: 'York',
      username: 't.york',
      password: '',
    });

    expect(response.statusCode).to.equal(400);
    expect(response.body).to.have.property('message');
    expect(response.body.message).to.equal('Dados Inválidos.');
  });
});
