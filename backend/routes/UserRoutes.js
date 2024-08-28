const router = require('express').Router()

const UserController = require('../controllers/UserController')

const verifyToken = require('../helpers/verify-token')
const { imageUpload } = require("../helpers/image-upload")

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.post('/checkuser', UserController.checkUser)
router.get('/:id', UserController.getUserById)
router.patch('/:id', verifyToken, UserController.editUser)

module.exports = router