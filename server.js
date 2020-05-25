const express = require('express')
const cors = require('cors')

server = express()
//MW
server.use(express.json()) 
server.use(cors())

//Routers

//api mw
server.get('/', (req, res, next) => {
    res.json({
        message: 'Welcome to my API'
    })
})
//err mw

module.exports = server;