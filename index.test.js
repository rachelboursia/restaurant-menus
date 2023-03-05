const {sequelize} = require('./db')
const {Restaurant, Menu, Restaurant} = require('./models/index')
const {
    seedRestaurant,
    seedMenu,
  } = require('./seedData');

describe('Restaurant and Menu Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    });

    test('can create a Restaurant', async () => {
        // TODO - write test
        const restaurant1 = await Restaurant.create({
            name: 'Wendys',
            location: 'Seattle',
            cuisine: 'Fast Food'
        });
        expect(restaurant1.name).toEqual('Wendys')
        expect(restaurant1.location).toEqual('Seattle')
        expect(restaurant1.cuisine).toEqual('Fast Food')
    });

    test('can create a Menu', async () => {
        // TODO - write test
        const dinnerMenu = await Menu.create({ 
            title: 'Dinner Menu'
        })
        const dessertMenu = await Menu.create({
            title: 'Dessert Menu'
        })
        expect(dinnerMenu.title).toEqual('Dinner Menu')
        expect(dessertMenu.title).toEqual('Dessert Menu')
    });

    test('can find restaurants', async () => {
        const restaurant1 = await Menu.findAll({
            where: {
                title: 'Wendys',
                location: 'Seattle',
                cuisine: 'Fast Food'
            }
        });
        const restaurant2 = await Menu.findAll({
            where: {
                title: 'Zestos',
                location: 'Seattle',
                cuisine: 'Fast Food'
            }
        });
        expect(restaurant1[0].title).toEqual('Wendys');
        expect(restaurant1[0].location).toEqual('Seattle');
        expect(restaurant1[0].cuisine).toEqual('Fast Food');
        expect(restaurant2[0].title).toEqual('Zestos');
        expect(restaurant2[0].location).toEqual('Seattle');
        expect(restaurant2[0].cuisine).toEqual('Fast Food');
    });
    

    test('can find Menus', async () => {
        // TODO - write test
        const menu1 = await Menu.findOne({
            where: { 
                title: 'Cheeseburger',
                price: 5.99,
                restaurantId: 1
            }
        });
        const menu2 = await Menu.findOne({
            where: {
                title: 'French Fries',
                price: 2.99,
                restaurantId:1
            }
        });
        expect(menu1.title).toEqual('Cheeseburger');
        expect(menu1.price).toEqual(5.99);
        expect(menu1.restaurantId).toEqual(1);
        expect(menu2.title).toEqual('French Fries');
        expect(menu2.price).toEqual(2.99);
        expect(menu2.restaurantId).toEqual(1);
    });

    test('can delete Restaurants', async () => {
        // TODO - write test
        const restaurant = await Restaurant.destroy({
               where:  {
                name: 'Wendys',
                location: 'Seattle',
                cuisine: 'Fast Food'
            }
        });
        const deleted = await restaurant.destroy();
        expect(deleted).toEqual(expect.any(Number));
        const deletedRestaurant = await Restaurant.findOne({
            where: {
                name: 'Wendys',
                location: 'Seattle',
                cuisine: 'Fast Food'
            }
        });
        expect(deletedRestaurant).toBeNull();
    });
})