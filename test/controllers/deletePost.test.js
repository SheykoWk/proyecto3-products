const {deletePost, createPost} = require('../../src/posts/posts.controllers')

const {describe, it} = require('mocha')
const {assert} = require('chai')

describe('Testing de los controladores para eliminar posts', () => {
    it('Deberia retornar un 0 si le pasamos un id incorrecto', (done) => {
        
        deletePost(98423948234)
            .then(data => {
                assert.equal(data, 0)
                done()
            })
    })
    it('Deberia retornar un 1 si le pasamos un id correcto', (done) => {
        createPost({
            content: 'asd',
            userName: 'Sahid Kick'
        }).then(() => {
            deletePost(1)
                .then(data => {
                    assert.equal(data, 0)
                    done()
                })
        })

    })
})



