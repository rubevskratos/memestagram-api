const router = require('express').Router()
const { authUser } = require('../utils')

const {
  ownProfile,
  updateProfile
} = require('../controllers/user.controller')

router.get('/profile', authUser, ownProfile)
router.put('/profile', authUser, updateProfile)





module.exports = router
