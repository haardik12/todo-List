const express = require('express')
const router = express.Router()

const userController = require('../controllers/user_controller')

router.get('/profile', userController.profile)
router.get('/sign-up', userController.signUp)
router.get('/sign-in', userController.signIn)
router.post('/sign-out', userController.signOut)
router.post('new-session', userController.signUp)

router.post('/create', userController.create)
router.post('/create-session', userController.createSession)

module.exports = router
