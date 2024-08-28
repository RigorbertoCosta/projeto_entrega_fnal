const router = require('express').Router()
const ProductController = require('../controllers/ProductController')
const verifyToken = require('../helpers/verify-token')
const { imageUpload } = require('../helpers/image-upload')

router.post('/', verifyToken, ProductController.create)
router.delete('/:id', verifyToken, ProductController.removeProductByID)
router.get('/', ProductController.getProducts)

module.exports = router