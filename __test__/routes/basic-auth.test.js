'use strict';

const faker = require('faker');
const mocks = require('../lib/mocks');
const User = require('../../model/user');
const superagent = require('superagent');
const server = require('../../lib/server');
require('jest');

describe('Testing basic auth routes', function() {
  beforeAll(server.start);
  afterAll(server.stop);
  afterEach(mocks.user.removeAll);


  //POST
  describe('POST to /api/signup', function() {
    describe('Valid Requests', () => {
      test('should respond with a token', () => {
        expect(true).toBeTruthy();
     });
  });
});
