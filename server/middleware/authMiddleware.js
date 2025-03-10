const jwt = require('jsonwebtoken')
const config = require('../config/config')
module.exports = function(req,res,next) {
    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            return res.json({message: 'not authorization'})
        }
        const decoded = jwt.verify(token, config.jwt.jwtSecretKey)
        req.user = decoded
        next()
    }catch(e){
        res.json({message: 'not authorization'})
    }
}