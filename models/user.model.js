const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true,
    unique: true,
    immutable: true

  },
  email: {
    type: String,
    required: true,
    unique: true,
    immutable: true
  },
  password: {
    type: String,
    required: true
  },
  post: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'post'
  }]
})

const userModel = mongoose.model('user', userSchema)

module.exports = userModel
