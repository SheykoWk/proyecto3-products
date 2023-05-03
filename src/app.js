const express = require("express")
const cors = require('cors')
require('dotenv').config()
const productRouter = require('./products/products.router')
const db = require('./utils/database')

const { port } = require('../config')

const app = express()

//Validar la conexión...
db.authenticate()
    .then(() => console.log('Database Authenticated!'))
    .catch((err) => console.log(err))

db.sync()
    .then(() =>  console.log('Database Synced!')) 
    .catch((err) => console.log(err))   

    

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.status(200).json({message: 'Server OK.'})
})

app.use('/', productRouter)
app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})