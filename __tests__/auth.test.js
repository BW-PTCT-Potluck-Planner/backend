const request = require('supertest')
const server = require('../server')
const db = require('../data/config')
const Auth = require('../auth/authModel')
const jwt = require('jsonwebtoken')


beforeEach(async () => {
    await db.seed.run
})

afterAll(async () => {
    await db.destroy()
})

const newUser = {
    username: 'Test',
    password: 'abc123'
}


describe('auth routes authenticate user', () => {
    it('registers user', async () => {
        const res = await request(server).post('/users/register').send(newUser)
        expect(res.status).toBe(200)
        expect(res.type).toBe('application/json')
        expect(res.body.data['username', 'password']).toBe(true)
        expect(res.body.username).toBe(newUser.username)
    })
    
    it('logs in user', async () => {
        const res = await request(server).post('/users/login').send(newUser)
        expect(res.status).toBe(200)
        expect(res.headers['set-cookie']).toBeDefined()

        const token = res.body.data.token
        jwt.verify(token, process.env.COOKIE_SECRET, (err, decodedPayload) =>{
            expect(err).toBeNull()
            expect(decodedPayload.username).toBe(newUser.username)
        })

    })
})