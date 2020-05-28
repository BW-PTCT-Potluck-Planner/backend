const request = require('supertest')
const server = require('../server')
const db = require('../data/config')
const Items = require('../menu_items/menuItemsRouter')

beforeEach(async () => {
    await db.seed.run
})

afterAll(async () => {
    await db.destroy()
})

describe('menuItems table returning items', () => {
    it('gets items', async () => {
        const res = await request(server).get('/menuItems')
        expect(res.statusCode).toBe(200)
        expect(res.body).toHaveLength(3)
    })
    it('adds item to menu', async () => {
        const res = await request(server).get('/menuItems')
        const newItem = await db('menuItems').insert( {name: 'something', events_id: 2} )
        expect(res.statusCode).toBe(200)
       // expect(newItem).toBeVisible()
    })
})