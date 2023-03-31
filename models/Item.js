const {sequelize} = require('../db');
const {Sequelize} = require('sequelize');

const Item = sequelize.define('item', {
    name: Sequelize.STRING,
    price: Sequelize.NUMBER,
    image: Sequelize.STRING,
    vegetarian: Sequelize.BOOLEAN
});

module.exports = {Item};