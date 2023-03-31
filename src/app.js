const express = require("express")

const { port } = require('../config')

const app = express()


app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})