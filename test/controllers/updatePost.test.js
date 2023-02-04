const {createPost, updatePost} = require('../../src/posts/posts.controllers')

const {describe, it} = require('mocha')
const {assert} = require('chai')

describe('Testing de los controladores para actualizar posts', () => {
    let id 
    createPost({
        content: 'asd',
        userName: 'Sahid Kick'
    }).then((data) => id = data.id)


    it('Deberia retornar [1], en caso de que el id que mandemos sea correcto', (done) => {
        
        updatePost(id, {content: 'this is my updated content'})
            .then(data => {
                assert.equal(data[0], 1)
                done()
            })
    })
    it('Deberia retornar [0], en caso de que el id que mandemos sea incorrecto', (done) => {
        
        updatePost(19230140192470, {content: 'this is my updated content'})
            .then(data => {
                assert.equal(data[0], 0)
                done()
            })
    })
})



