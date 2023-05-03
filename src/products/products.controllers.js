
const Products = require('../models/products.models')

const findAllProducts = async() => {   
    //? Your code here:
    const products = await Products.findAll()
    return products
}

const findProductById = async(id) => {
    //? Your code here:
    const data = await Products.findOne({
        where: {
            id: id
        }
    })
    return data
}

const createProduct = async(productObj) => {
    //? Your code here:
    const newProduct = await Products.create({
        
            name: productObj.name,
            description: productObj.description,
            price: productObj.price,
            stock: productObj.stock
    })
    return newProduct

}

const updateProduct = async (id, productObj) => {
    //? Your code here:
    const productSelected = await Products.findOne({
        where: {
            id: id,
        }
    })

    if(!productSelected) return null
    const modifiedProducts = await productSelected.update(productObj)
    return modifiedProducts
    
}

const deleteProduct = async(id) => {
    //? Your code here:
    const product = await Products.destroy({
        where: {
            id: id
        }
    })
    return product

}

module.exports = {
    findAllProducts,
    findProductById,
    createProduct,
    updateProduct,
    deleteProduct
}

