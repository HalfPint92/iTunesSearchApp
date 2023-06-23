// Import the supertest library for making HTTP requests
const request = require('supertest');
// Import the Express app from the server.js file
const app = require('./server');

describe('GET /search', () => {
  it('returns search results based on query', (done) => {
    // Create a request object using the Express app
    request(app)
      // Send a GET request to the '/search' endpoint
      .get('/search')
      // Set query parameters 'term' and 'media'
      .query({ term: 'example', media: 'all' })
      // Expect the response status code to be 200 (OK)
      .expect(200)
      // Callback function to handle the response
      .end((err, res) => {
        // If an error occurred, pass it to 'done' and exit the test
        if (err) return done(err);
        // Expect the response body to have a 'message' property with the value 'Search was successful'
        expect(res.body.message).toBe('Search was successful');
        // Expect the response body to have a 'response' property with a length greater than 0
        expect(res.body.response.length).toBeGreaterThan(0);
        // Signal that the test is done 
        done();
      });
  });
});