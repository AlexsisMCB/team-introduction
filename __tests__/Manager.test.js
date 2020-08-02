const Manager = require('../lib/Manager.js');

test('creates Manager object with properties', () => {
    const manager = new Manager('Alexsis', '1', 'name@email.com', '123-4567');

    expect(manager.name).toBe('Alexsis');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('name@email.com');
    expect(manager.officeNumber).toBe('123-4567');

    console.log(manager);
});


