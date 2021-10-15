const jwt = require('jsonwebtoken');

const JWT_SECRET = "jwt1234"

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET || JWT_SECRET, {
        expiresIn: '30d'
    })
}

module.exports = generateToken