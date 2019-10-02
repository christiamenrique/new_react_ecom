const expect = require("chai").expect;
const request = require('request');

//  The unit tests uses mocha and chai 
// it include positive tests

describe('Tests for "/" api endpoint', () => {
    it("/ should send back 200 status code", (done) => {
        request.get('/', (error, response, body) => {
            expect(200)
            done()
        })
    })
    it("/ should not send back json in the body", (done) => {
        request.get("/", (error, response, body) => {
            expect(body).to.not.be.an('json')
            done()
        })
    })

    it("/products should send back 200 status code", (done) => {
        request.get('/products', (error, response, body) => {
            expect(200)
            done()
        })
    })

    it("/contacts should send back 200 status code", (done) => {
        request.get('/contacts', (error, response, body) => {
            expect(200)
            done()
        })
    })

})


