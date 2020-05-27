const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const events = require('./events/eventsRouter')
const users = require('./auth/authRouter')

server = express()

//MW
server.use(express.json()) 
server.use(cors())
server.use(cookieParser())

//Routers
server.use('/events', events)
server.use('/users', users)

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