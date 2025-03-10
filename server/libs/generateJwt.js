const jwt = require('jsonwebtoken')
const config = require('../config/config')

const generateJwt = (id,email,name) => {
    return jwt.sign(
        {id,email,name},
        config.jwt.jwtSecretKey,
        {expiresIn: '24h'}
    )
}

const decodeToken = (token) => {
 
    const decoded_token = jwt.verify(token, config.jwt.jwtSecretKey)
 
    const id = decoded_token.id
    return id
}

module.exports = {generateJwt, decodeToken}