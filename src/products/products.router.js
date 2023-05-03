const router = require('express').Router()
const productServices = require('./products.services')

router.get('/products', productServices.getAllProducts)
router.post('/products', productServices.postNewProduct)

router.get('/products/:id', productServices.getProductById)


module.exports = router