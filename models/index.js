const {Restaurant} = require('./Restaurant')
const {Menu} = require('./Menu');
const {Item} = require('./Item');

Menu.belongsTo(Restaurant);
Restaurant.hasMany(Menu);

Item.belongsToMany(Menu, { through: 'item_menus'});
Menu.belongsToMany(Item, { through: 'item_menus'});

module.exports = { Restaurant, Menu, Item }
