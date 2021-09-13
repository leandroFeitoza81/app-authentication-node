const request = require('supertest');
const app = require('../src/app');
const { expect } = require('chai');
const shell = require('shelljs');
const { users } = require('../src/models');

describe('Test the route [GET] -> "/api/users"', () => {
  beforeEach(() => {
    shell.exec('NODE_ENV=test yarn sequelize-cli db:drop');
    shell.exec('NODE_ENV=test yarn sequelize-cli db:create');
    shell.exec('NODE_ENV=test yarn sequelize-cli db:migrate');
    shell.exec('NODE_ENV=test yarn sequelize-cli db:seed:all');
  });

  it('Test it if returns an array of users', async () => {
    const response = await request(app).get('/api/users');
    expect(response.statusCode).to.equal(200);
    expect(response.body).to.have.lengthOf(3);
    expect(response.body[0]).to.include({
      name: 'Chris',
      last_name: 'Cornell',
      username: 'c.cornell',
      password: 'senha123',
    });
  });
});
