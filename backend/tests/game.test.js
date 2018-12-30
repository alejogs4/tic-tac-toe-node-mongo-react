const request = require('supertest');
const app = require('express');

test('This test add a new game', () => {
  request(app)
    .post('http://localhost:3001/api/v1/game')
    .expect(201);

});

test('Return game by id', () => {
  request(app)
    .get('http://localhost:3001/api/v1/game/5c292b84354d373494fa4b6b')
    .expect(200);
});
