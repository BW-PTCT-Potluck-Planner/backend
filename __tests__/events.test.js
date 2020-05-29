const request = require('supertest')
const server = require('../server')
const db = require('../data/config')
const Events = require('../events/eventsModel')




describe('app working', () => {
    beforeEach(async () => {
        await db.seed.run()
    })
    
    afterAll(async () => {
        await db.destroy()
    })
    it('gets db info', async () => {
        const res = await request(server).get('/events')
        expect(res.status).toBe(200)
        expect(res.type).toBe('application/json')
        expect(res.body[0].name).toBe('Amy\'s Birthday')
    })
    it('gets event by id', async () => {
        const res = await request(server).get('/events/1')
        expect(res.status).toBe(200)
        expect(res.type).toBe('application/json')
        expect(res.body.name).toBe('Amy\'s Birthday')
    })
    // it('adds event', async () => {
    //     const res = await request(server).get('/events')
    //     await Events.add({ 
    //         name: 'Amy\'s Birthday', 
    //         description: 'Come celebrate as Amy turns 21',
    //         location: 'Paddy\'s Bar',
    //         when: 'Jan 14 at 2.30 pm' 
    //     })
    //     expect(res.status).toBe(200)
    //     const data = await db('events')
    //     expect(data).toBe(res.body)
    // }) 
    it('deletes an event', async () => {
        const res = await request(server).delete('/events/3')
        
        expect(res.status).toBe(200)
    })
   it('updates an event', async () => {
        const newLocation = { location: 'Willie\'s Joint' }
        const res = await request(server).put('/events/1').send(newLocation)
        expect(res.body.location).toEqual('Willie\'s Joint')     
    })
})         
           
        
