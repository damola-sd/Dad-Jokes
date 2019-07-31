const jwt = require('jsonwebtoken');
const secret = require('./secret');

module.exports = generateToken = (user) =>{ 
    const payload = {
        sub: user.id,
        username: user.username
    }

    const options = {
        expiresIn: '1d'
    }

    return jwt.sign(payload, secret, options);
}

