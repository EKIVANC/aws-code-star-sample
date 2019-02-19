var app = require('./app');
const request = require('supertest');
var assert = require('assert');

describe('GET /', function () {
    it('respond with json containing result of get request', function (done) {
        request(app)
        .get('/')
        .expect('Content-Type', /json/)
        .expect( res => {
            assert.equal(res.body.name, 'Deloitte <3 Digital both deploy with load balancer');
        })
        .expect(200,done)
    })
});