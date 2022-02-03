const jwt = require('jsonwebtoken')
const UserModel = require('../models/user.model')

function authUser(req, res, next) {
  if (!req.headers.token) {
    res.status(403).json({ error: 'No Token found' })
  } else {
    jwt.verify(req.headers.token, process.env.SECRET, (err, token) => {
      if (err) { res.status(403).json({ error: 'Token not valid' }) }
      UserModel.findOne({ email: token.email }, { password: 0 })
        .then(user => {
          res.locals.user = user
          next()
        })
    })
  }
}

module.exports = { authUser }
