const Sequelize = require('sequelize');

const sequelize = new Sequelize('seller-admin','root','12345',{
    dialect:'mysql',
    host:'localhost'
})

module.exports = sequelize;