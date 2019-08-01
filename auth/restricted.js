const jwt = require('jsonwebtoken');
const secret = require('./secret');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            if (err) {
                res.status(401).json({message: 'Access denied. Wrong Credentials' });
            } else {
                req.decodedToken = decodedToken;
                console.log('decoded token', req.decodedToken);
                next();
            }
        });
    } else {
        res.status(401).json({ message: 'Access denied. You do not have access to this endpoint. Login first' });
    }
};