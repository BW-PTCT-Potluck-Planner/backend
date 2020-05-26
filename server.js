const express = require('express')
const cors = require('cors')
const events = require('./events/eventsRouter')
server = express()
//MW
server.use(express.json()) 
server.use(cors())

//Routers
server.use('/events', events)
//api mw
server.get('/', (req, res, next) => {
    res.json({
        message: 'Welcome to my API'
    })
})
//err mw
server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: 'Unable to complete requrest'
    })
})

module.exports = server;