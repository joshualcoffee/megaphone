var request = require('supertest');

var app = require('../app.js');

describe('Hello World', function () {
  it('should return hello world', function (done) {
    request(app.listen())
    .get('/')
    .expect(200)
    .expect('Content-Length', 11)
    .expect('Content-Type', 'text/plain; charset=utf-8')
    .end(done)
  })
})
