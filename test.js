const expect = require("chai").expect;
const request = require('request');

//  The unit tests uses mocha and chai 
// it include both positive and negative tests
it('It should take the user to the home page', (done) => {
    request('http://localhost:3500/', (err, response, body) => {
        expect(body).to.equal(200)
        done()
    })
})

it('It should take user to the product page', (done) => {
    request('http://localhost:3500/product', (err, response, body) => {
        expect(body).to.equal(200)
    })
})

it('It should take user to the contact page', (done) => {
    request('http://localhost:3500/contact', (err, response, body) => {
        expect(body).to.equal(200)
    })
})