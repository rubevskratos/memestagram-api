const UserModel = require('../models/user.model')
const PostModel = require('../models/post.model')



async function postAPost(req, res) {
  try {
    req.body.date = Date.now()
    req.body.author = res.locals.user.id
    const post = await PostModel.create(req.body)
    const user = await UserModel.findById(res.locals.user.id)
    user.post.push(post.id)
    user.save()
    res.status(200).json(post)
  } catch (error) {
    res.status(500).send(`Error creating post: ${error}`)
    throw new Error(`Error creating post: ${error}`)
  }
}

async function getAllPosts(req, res) {
  try {
    const post = await PostModel.find()
    res.status(200).json(post)
  } catch (error) {
    res.status(500).send(`Error creating post: ${error}`)
    throw new Error(`Error creating post: ${error}`)
  }
}



module.exports = { postAPost, getAllPosts }
