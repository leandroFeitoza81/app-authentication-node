const request = require('supertest');
const app = require('../src/app');
const { expect } = require('chai');

const data = [
  {
    id: 1,
    name: 'Chris',
    last_name: 'Cornell',
    username: 'c.cornell',
    password: 'senha123',
  },
  {
    id: 2,
    name: 'Charlie',
    last_name: 'Watts',
    username: 'c.watts',
    password: 'senha123',
  },
  {
    id: 3,
    name: 'Ian',
    last_name: 'Curtis',
    username: 'i.curtis',
    password: 'senha123',
  },
];

describe('Test if it is possible to search all users in the base', () => {
  it('Test if the route [GET] "/api/users" returns an array of users', async () => {
    const response = await request(app).get('/api/users');

    expect(response).to.be.a('object');

    expect(response.body).to.have.lengthOf(3);
    expect(response.body).to.deep.equal(data);
  });
});
