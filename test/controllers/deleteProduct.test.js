const {deleteProduct, createProduct} = require('../../src/products/products.controllers')

const {describe, it} = require('mocha')
const {assert} = require('chai')

describe('Testing de los controladores para eliminar products', () => {
    it('Deberia retornar un 0 si le pasamos un id incorrecto', (done) => {
        
        deleteProduct(123123)
            .then(data => {
                assert.equal(data, 0)
                done()
            })
            .catch(done)
    })
    it('Deberia retornar un 1 si le pasamos un id correcto', (done) => {
        createProduct({
            name: "Iphone 14",
            description: "Lorem",
            price: 1500.00,
            stock: 10
        })
            .then((data1) => {
                deleteProduct(data1.id)
                    .then(data => {
                        assert.equal(data, 1)
                        done()
                    })
                    .catch(done)
            })
            .catch(done)

    })
})



