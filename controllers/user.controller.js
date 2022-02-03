const UserModel = require('../models/user.model')


async function ownProfile(req, res) {
  try {
    const user = await UserModel
      .findById(res.locals.user.id, { password: 0 })
      .populate('post')
    res.status(200).json(user)
  } catch (error) {
    res.status(500).send(`Error showing profile: ${error}`)
    throw new Error(`Error showing profile: ${error}`)
  }
}

async function updateProfile(req, res) {
  try {
    const user = await UserModel
      .findByIdAndUpdate(res.locals.user.id, req.body, {
        new: true,
        runValidators: true
      })
    await user.save()
    res.status(200).json(user)

  } catch (error) {
    res.status(500).send(`Error updating user: ${error}`)
    throw new Error(`Error updating user: ${error}`)
  }

}


module.exports = { ownProfile, updateProfile }
