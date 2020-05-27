const server = require('./server')
const dotenv = require('dotenv')
dotenv.config()

port = process.env.PORT || 4000

server.listen(port, () => {
    console.log(`server listenting at http://localhost:${port}`)
});