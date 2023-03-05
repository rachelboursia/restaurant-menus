const {Restaurant} = require('./Restaurant')
const {Menu} = require('./Menu');
const { seedItem } = require('../seedData');

Menu.belongsTo(Restaurant);
Restaurant.hasMany(Menu);

module.exports = { Restaurant, Menu }
