const UserModel = require('../models/user.model')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

async function signup(req, res) {
  try {
    req.body.password = bcrypt.hashSync(req.body.password, parseInt(process.env.SALTROUNDS))
    const user = await UserModel.create(req.body)

    const payload = { email: user.email, userName: user.userName }
    const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '1h' })

    res.status(200).json({ email: user.email, userName: user.userName, token })
  } catch (error) {
    res.status(500).send(`Error creating user: ${error}`)
    throw new Error(`Error creating user: ${error}`)
  }
}

async function login(req, res) {
  try {
    const user = await UserModel.findOne({ email: req.body.email })
    if (!user) {
      res.status(400).send('Email or password incorrect')
    }

    bcrypt.compare(req.body.password, user.password, (err, result) => {
      if (err) throw new Error(err)

      if (!result) {
        res.status(400).send('Email or password incorrect')
      }

      const token = jwt.sign({ email: user.email }, process.env.SECRET, { expiresIn: '1h' })
      res.status(200).json({ email: user.email, token })
    })
  } catch (error) {
    res.status(500).send('Error logging user')
    throw new Error(`Error logging user: ${error}`)
  }
}

module.exports = { signup, login }
