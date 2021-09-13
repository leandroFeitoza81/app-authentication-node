const request = require('supertest');
const app = require('../src/app');
const { expect } = require('chai');

const { users } = require('../src/models');

describe('Test the route [GET] -> "/api/users"', () => {
  it('Test it if returns an array of users', async () => {
    const data = [
      {
        id: 1,
        name: 'Ian',
        last_name: 'Curtis',
        username: 'i.curtis',
        password: 'senha123',
      },
    ];
    await users.create(data[0]);
    const response = await request(app).get('/api/users');
    expect(response.statusCode).to.equal(200);
    expect(response.body).to.have.lengthOf(1);
    expect(response.body).to.deep.equal(data);
  });
});
