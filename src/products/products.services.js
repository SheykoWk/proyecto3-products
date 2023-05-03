const { FLOAT, NUMBER } = require('sequelize')
const productControllers = require('./products.controllers')

const  getAllProducts = (req, res) => {
    productControllers.findAllProducts()
        .then( data => {
            res.status(200).json(data)
        })
        .catch( err => {
            res.status(400).json({message: 'Bad request', err})
        })
}

const getProductById = (req, res) => {
    const id = Number(req.params.id)
    productControllers.findProductById(id)
        .then(  data => {
            if(!data){
                return res.status(404).json({message: `Product with id: ${id}, not found`})
            }
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: 'Bad request', err})
        })
}

const postNewProduct = (req, res) => {
    const productObj = req.body  
    productControllers.createProduct(productObj)
    .then( data => {
        res.status(201).json(data)
    })
    .catch(err => {
        res.status(400).json({message: 'Bad request', err})
    })

} 

const patchProduct = (req, res) => {
    const id = Number(req.params.id)
    const productObj = req.body

    productControllers.updateProduct(id, productObj)
    .then(data => {
        if(!data){
            return res.status(404).json({message: 'Invalid ID.'})
        }
        res.status(200).json(data)
    })
    .catch((err) => {
        res.status(400).json({message: 'Bad request', err})
    })
}

const deleteUser = (req, res) => {
    const id = req.params.id
    productControllers.deleteProduct(id)
        .then( data => {
            if(!data){
                return res.status(404).json({message: 'Invalid ID.'})
            }
            res.status(204).json()
        })
        .catch((err) => {
            res.status(400).json({message: 'Bad request', err})
        })
}



module.exports = {
    getAllProducts,
    getProductById,
    postNewProduct,
    patchProduct,
    deleteUser
}