const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
    immutable: true

  },
  comments: [{
    type: String,
    immutable: true
  }],
  date: {
    type: Date,
    immutable: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    immutable: true
  }
})

const postModel = mongoose.model('post', postSchema)

module.exports = postModel
