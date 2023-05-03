const {Sequelize} = require('sequelize')
const config = require('../../config')

const enviroment = config.nodeEnv

const db = new Sequelize(config.db[enviroment])

module.exports = db