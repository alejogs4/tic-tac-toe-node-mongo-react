const request = require('supertest');
const app = require('express');

test('This test add a new game', () => {
  request(app)
    .post('http://localhost:3001/api/v1/game')
    .expect(201);
});
