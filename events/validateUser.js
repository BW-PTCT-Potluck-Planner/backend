const jwt = require('jsonwebtoken')

function validateUser() {
    return async(req, res, next) => {
        const authErr = {
            message: 'Invalid Credentials'
        }
    try {
        const token = req.cookies.token 
         if(!token) {
             return res.status(401).json(authErr)
         }
         jwt.verify(token, process.env.COOKIE_SECRET, (err, decodedPayload) => {
             if(err) {
                 res.status(401).json(authErr)
             }
             req.token = decodedPayload
             next()
         })

        } catch(err) {
            next(err)
        }
    }
};

module.exports = validateUser;