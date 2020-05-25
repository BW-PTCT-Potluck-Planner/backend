const request = require('supertest');
const server = require('./server');


describe('server.js works', () => {
    it('should return OK status', async () => {
        const expectedStatusCode = 200;
        //req to get api & code
        const res = await request(server).get('/')
        expect(res.status).toEqual(expectedStatusCode)
    })
    it('should return content-type', async () => {
        const res = await request(server).get('/')
        expect(res.type).toBe('application/json')
    })
    it('should return json {}', async() => {
        const expectedBody = {message: 'Welcome to my API'}
        //req to get message
        const res = await request(server).get('/')
        expect(res.body).toEqual(expectedBody)
    })
})



