
const {findAllPosts} = require('../../src/posts/posts.controllers')

const {describe, it} = require('mocha')
const {assert} = require('chai')

describe('Testing de los controladores para obtener todos los posts', () => {
    it('Deberia retornar un arreglo con todos los posts', (done) => {
        
        findAllPosts()
            .then(data => {
                assert.typeOf(data, 'array')
                done()
            })
    })
})



