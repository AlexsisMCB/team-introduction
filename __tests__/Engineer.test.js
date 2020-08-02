const Engineer = require('../lib/Engineer.js');

test('creates Engineer object with properties', () => {
    const engineer = new Engineer('Jasmine', 2, 'name@email.com', 'JasGitHub');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));

    console.log(engineer);
});

test("get the team member's name", () => {
    const engineer = new Engineer('Jasmine', 2, 'name@email.com', 'JasGitHub');

    expect(engineer.getName()).toEqual(expect.stringContaining(engineer.name.toString()));
    console.log(engineer.getName());
});

test("get team member's ID number", () => {
    const engineer = new Engineer('Jasmine', 2, 'name@email.com', 'JasGitHub');

    expect(engineer.getId()).toEqual(expect.stringContaining(engineer.id.toString()));
    console.log(engineer.getId());
});

test("get team member's email address", () => {
    const engineer = new Engineer('Jasmine', 2, 'name@email.com', 'JasGitHub');

    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email.toString()));
    console.log(engineer.getEmail());
});

test('gets github username', () => {
    const engineer = new Engineer('Jasmine', 2, 'name@email.com', 'JasGitHub');

    expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.github.toString()));
    console.log(engineer.getGitHub());
})