const request = require('supertest')
const server = require('../server')
const db = require('../data/config')
const Events = require('../events/eventsModel')
beforeEach(async () => {
    await db.seed.run
})

describe('app working', () => {
    it('gets db info', async () => {
        const res = await request(server).get('/events')
        expect(res.status).toBe(200)
        expect(res.type).toBe('application/json')
        expect(res.body[1]).toBe('Amy\'s Birthday')
    })
    it('gets event by id', async () => {
        const res = await request(server).get('/events/:id')
        expect(res.status).toBe(200)
        expect(res.type).toBe('application/json')
     /  expect(res.body[1]).toBe('Amy\'s Birthday')
    })
    it('adds event', async () => {
        const res = await request(server).get('/events')
        await Events.add({ 
            name: 'Amy\'s Birthday', 
            description: 'Come celebrate as Amy turns 21',
            location: 'Paddy\'s Bar',
            when: 'Jan 14 at 2.30 pm' 
        })
        expect(res.status).toBe(200)
        const data = await db('events')
       // expect(data).toBeVisible()
    }) 
})