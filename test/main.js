import http from 'http';         // Native HTTP module for making requests
import { expect } from 'chai';   // Chai assertions (now supports ESM)
import app from '../index.js';    // Import the Express app (ensure the correct extension)

describe('GET /', function() {
  let server; // Declare a variable to hold the server instance

  // Start the server before any tests run
  before(function(done) {
    server = http.createServer(app);  // Create the server with the imported app
    server.listen(3000, done);        // Start listening on port 3000
  });

  // Stop the server after the tests are done
  after(function(done) {
    server.close(done);  // Gracefully shut down the server after tests
  });

  // Test 1: Check the status code is 200
  it('should return status code 200', function(done) {
    http.get('http://localhost:3000/', (res) => {
      // Perform assertions for the status code
      expect(res.statusCode).to.equal(200); // Expect status code to be 200
      done();
    }).on('error', (err) => { done(err); });
  });

  // Test 2: Check the response body is 'Hello, World!'
  it('should respond with Hello, World!', function(done) {
    http.get('http://localhost:3000/', (res) => {
      let data = '';

      // Collect the response data
      res.on('data', (chunk) => { data += chunk; });

      // When the response ends, perform assertions
      res.on('end', () => {
        // Assertions for the response body
        expect(data).to.equal('Hello, World!'); // Expect body to be 'Hello, World!'
        done();
      });
    }).on('error', (err) => { done(err); });
  });
});

