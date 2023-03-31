
const {findAllProducts} = require('../../src/products/products.controllers')

const {describe, it} = require('mocha')
const {assert} = require('chai')

describe('Testing de los controladores para obtener todos los productos', () => {
    it('Deberia retornar un arreglo con todos los productos', (done) => {
        
        findAllProducts()
            .then(data => {
                assert.typeOf(data, 'array')
                done()
            })
    })
})



