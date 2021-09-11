const request = require('supertest');
const app = require('../src/app');
const { expect } = require('chai');

describe('Test a route /wellcome', () => {
  it('Test a route /wellcome', async () => {
    const response = await request(app).get('/api');

    expect(response.statusCode).equal(200);
    expect(response).to.be.a('object');
  });
});
