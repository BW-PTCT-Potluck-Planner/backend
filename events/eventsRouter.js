const express = require('express')
const Events = require('./eventsModel')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        res.json(await Events.find())
    } catch(err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try{
        const { id } = req.params
        res.json( await Events.findBy(id))

    } catch(err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const data = await Events.add(req.body)
        res.status(201).json(data)

    } catch(err) {
        next(err)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        res.status(200).json(await Events.remove(id))
    } catch (err) {
        next(err)
    }
})

module.exports = router;