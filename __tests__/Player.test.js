const Player = require('../lib/Player');
const Potion = require('../lib/Potion');

jest.mock('../lib/Potion');

// player object creation
test('creates a player object', () => {
    const player = new Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    // new inventory test
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );
});

// player stat function test
test("gets player's stats as an object", () => {
    const player = new Player('Dave');

    expect(player.getStats()).toHaveProperty('potions');
    expect(player.getStats()).toHaveProperty('potions');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');
});

// test to for return of inventory items
test('gets inventory from player or returns false', () => {
    const player = new Player('Dave');
  
    expect(player.getInventory()).toEqual(expect.any(Array));
  
    player.inventory = [];
  
    expect(player.getInventory()).toEqual(false);
  });

