const Manager = require('../lib/Manager.js');

test('creates Manager object with properties', () => {
    const manager = new Manager('Alexsis', 1, 'name@email.com', '123-4567');

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(String));

    console.log(manager);
});

test("get the team member's name", () => {
    const manager = new Manager('Alexsis', 1, 'name@email.com', '123-4567');

    expect(manager.getName()).toEqual(expect.stringContaining(manager.name.toString()));
    console.log(manager.getName());
});

test("get team member's ID number", () => {
    const manager = new Manager('Alexsis', 1, 'name@email.com', '123-4567');

    expect(manager.getId()).toEqual(expect.stringContaining(manager.id.toString()));
    console.log(manager.getId());
});

test("get team member's email address", () => {
    const manager = new Manager('Alexsis', 1, 'name@email.com', '123-4567');

    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email.toString()));
    console.log(manager.getEmail());
});

test('get team role', () => {
    const manager = new Manager('Alexsis', 1, 'name@email.com', '123-4567');

    expect(manager.getRole()).toEqual(expect.any(String));
    console.log(manager.getRole());
});

