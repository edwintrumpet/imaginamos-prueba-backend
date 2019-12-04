/* eslint-disable no-undef */
const assert = require('assert');
const proxyquire = require('proxyquire');
const testServer = require('../src/utils/testServer');
const { DeliveriesServiceMock, deliveriesMock } = require('../src/utils/mocks');

describe('routes - deliveries', () => {
  const route = proxyquire('../src/routes/deliveries', {
    '../services/deliveries': DeliveriesServiceMock,
  });
  const request = testServer(route);
  describe('GET /deliveries/:userId', () => {
    it('should respond with status 200', (done) => {
      request.get('/api/deliveries/df0e3ff7f1f7cfe7fee916e3').expect(200, done);
    });
    it('should respond with a list of deliveries', (done) => {
      request.get('/api/deliveries/df0e3ff7f1f7cfe7fee916e3').end((err, res) => {
        assert.deepEqual(res.body, {
          data: deliveriesMock,
          message: 'deliveries listed',
        });
        done();
      });
    });
  });

  describe('POST /deliveries', () => {
    it('should respond with status 201', (done) => {
      request.post('/api/deliveries').expect(201, done);
    });
    it('should respond with the created delivery id', (done) => {
      request.post('/api/deliveries').end((err, res) => {
        assert.deepEqual(res.body, {
          data: deliveriesMock[0]._id,
          message: 'delivery created',
        });
        done();
      });
    });
  });
});

