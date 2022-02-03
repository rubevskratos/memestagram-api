const router = require('express').Router()
const { authUser } = require('../utils')

const {
  postAPost,
  getAllPosts
} = require('../controllers/post.controller')

router.post('/', authUser, postAPost)
router.get('/', getAllPosts)

module.exports = router
