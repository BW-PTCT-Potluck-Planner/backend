const express = require('express')
const jwt = require('jsonwebtoken')
const Users = require('../auth/authModel')

const router = express.Router()


router.get('/',async (req, res, next) => {
    try {
        res.json(await Users.find())

    } catch(err) {
        next(err)
    }
})

router.post('/register', async (req, res, next) => {
    try {
        const { username } = req.body
        const user = await Users.findBy({ username }).first()
          if(user) {
              return res.status(409).json({
                  message: 'Username taken'
              })
            }
          res.status(201).json(await Users.insert(req.body))  

    } catch(err) {
        next(err)
    }
})
router.post('/login', async (req, res, next) => {
    const authErr = {
        message: 'Invalid Credentials'
    }
    try {

        const { username, password } = req.body
        const user = await Users.findBy({ username }).first()
        if (!user) {
           return res.status(401).json(authErr)
        }
        const pswdValid = bcrypt.compareSync(password, user.password)
        if (!pswdValid) {
            return res.status(401).json({
                message: 'Invalid Password'
            })
        }
        const tokenPayload = {
            subject: user.id,
            username: user.username
        }
        res.cookie('token', jwt.sign(tokenPayload, process.env.COOKIE_SECRET))
        res.json({
            message: `Welcome ${user.username}!`
        })
    } catch (err) {
        next(err)
    }
})

module.exports = router;