const {sequelize} = require('./db')
const path = require('path');
const {Restaurant, Menu, Item} = require('./models/index')
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
    const restaurant1 = await Restaurant.findOne({
      where: {
        name: 'Wendys',
        location: 'Seattle',
        cuisine: 'Fast Food'
      },
    });
    expect(restaurant1).toBeDefined();
    expect(restaurant1.name).toBe('Wendys');
    expect(restaurant1.location).toBe('Seattle');
    expect(restaurant1.cuisine).toBe('Fast Food');
});

test('can find menus', async () => {
    const dinnerMenu = await Menu.findOne({
      where: {
        title: 'Dinner Menu'
      },
    });
    expect(dinnerMenu).toBeDefined();
    expect(dinnerMenu.title).toBe('Dinner Menu');
});

      

    test('can delete Restaurants', async () => {
        const restaurant = await Restaurant.create({
          title: ' Wendys',
          location: 'Seattle'
        });
        const restaurantId = restaurant.id;
      
        const deletedCount = await Restaurant.destroy({ where: { id: restaurantId } });
        expect(deletedCount).toBe(1);
      
        const deletedRestaurant = await Restaurant.findOne({ where: { id: restaurantId } });
        expect(deletedRestaurant).toBeNull();
      });
      
})

