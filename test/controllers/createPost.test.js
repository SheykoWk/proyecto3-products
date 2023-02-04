const {createPost} = require('../../src/posts/posts.controllers')

const {describe, it} = require('mocha')
const {assert} = require('chai')

describe('Testing de los controladores para crear posts', () => {
    it('Deberia retornar un error si no le mandamos content', (done) => {
        const newPost = {
            userName: 'Sahid Kick',
            published: true
        }
        createPost(newPost)
            .catch(err => {
                assert.equal(err.message, 'notNull Violation: posts.content cannot be null')
                done()
            })
    })
    it('Deberia retornar un error si no le mandamos userName', (done) => {
        const newPost = {
            content: 'Publicacion de Test',
            published: true
        }
        createPost(newPost)
            .catch(err => {
                assert.exists(err.message)
                done()
            })
    })
    it('Deberia retornar la nueva publicación que se acaba de crear', (done) => {
        const newPost = {
            userName: 'Sahid Kick',
            content: 'Publicacion de Test',
            published: true
        }
        createPost(newPost)
            .then(data => {
                assert.typeOf(data, 'object')
                done()
            })
    })
    it('Deberia retornar el id dentro de las propiedades de la nueva publicación', (done) => {
        const newPost = {
            userName: 'Sahid Kick',
            content: 'Publicacion de Test',
            published: true
        }
        createPost(newPost)
            .then(data => {
                assert.property(data, 'id')
                done()
            })
    })
})



