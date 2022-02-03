const router = require('express').Router()

const authRouter = require('./auth.router')
const userRouter = require('./user.router')
const postRouter = require('./post.router')

router.use('/auth', authRouter)
router.use('/user', userRouter)
router.use('/post', postRouter)


module.exports = router
