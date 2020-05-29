const express = require('express')
const db = require('../data/config')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try { 
        res.json(await db('menuItems'))

    } catch(err) {
        next(err)
    }
})
router.post('/', async (req, res, next) => {
    try {
        const newItem = await db('menuItems').insert(req.body)
        res.status(201).json(newItem)
    } catch(err) {
        next(err)
    }
})




module.exports = router;