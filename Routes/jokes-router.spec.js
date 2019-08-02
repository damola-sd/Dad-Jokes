const request = require('supertest');

const server = require('./jokes-router');

describe('jokes-router.js', () => {
    describe('jokes', () => {
        it('should return an OK status code from the index route', async () => {
          const expectedStatusCode = 200; 
          const response = await request(server).get('/');


        });

        it('should return a JSON object fron the index route', async () => {
            const response = await request(server).get('/');
      
            expect(response.type).toEqual('application/json');
          });
        });
    });