const {createProduct} = require('../../src/products/products.controllers')

const {describe, it} = require('mocha')
const {assert} = require('chai')

describe('Testing de los controladores para crear productos', () => {
    it('Deberia retornar un error si no le mandamos price', (done) => {
        const newProduct = {
            name: "Samsung S21",
            description: "Lorem",
            stock: 10
        }
        createProduct(newProduct)
            .then(done)
            .catch(err => {
                assert.exists(err)
                done()
            })
    })
    it('Deberia retornar un error si no le mandamos name', (done) => {
        const newProduct = {
            description: "Lorem",
            price: 1300.00,
            stock: 10
        }
        createProduct(newProduct)
            .then(done)
            .catch(err => {
                assert.exists(err.message)
                done()
            })
    })
    it('Deberia retornar la nueva publicación que se acaba de crear', (done) => {
        const newProduct = {
            name: "Samsung S21",
            description: "Lorem",
            price: 1300.00,
            stock: 10
        }
        createProduct(newProduct)
            .then(data => {
                assert.typeOf(data, 'object')
                done()
            })
            .catch(done)

    })
    it('Deberia retornar el id dentro de las propiedades de la nueva publicación', (done) => {
        const newProduct = {
            name: "Pocco lite 10",
            description: "Lorem",
            price: 400.00,
            stock: 10
        }
        createProduct(newProduct)
            .then(data => {
                assert.property(data, 'id')
                done()
            })
            .catch(done)
    })
})



