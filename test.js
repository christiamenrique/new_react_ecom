const expect = require("chai").expect;
const request = require('request');

//  The unit tests uses mocha and chai 
// it include both positive and negative tests
// it('It should take the user to the home page', (done) => {
//     request('http://localhost:3500/', (err, response, body) => {
//         expect(body).to.equal('Home page')
//         done()
//     })
// })

// it('The string should be reverse', (done) => {
//     request('http://localhost:3005/first/hello', (err, response, body) => {
//         expect(body).to.equal('olleh')
//         done()
//     })
// })

// it('Check if endpoints are working', (done) => {
//     request('http://localhost:3005/first/hello', (err, response, body) => {
//         expect(response.statusCode).to.not.equal(404);
//         done()
//     })
// })