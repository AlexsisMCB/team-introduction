const Engineer = require('../lib/Engineer.js');

test('creates Engineer object with properties', () => {
    const engineer = new Engineer('Jasmine', '2', 'name@email.com', 'JasGitHub');

    expect(engineer.name).toBe('Jasmine');
    expect(engineer.id).toBe('2');
    expect(engineer.email).toBe('name@email.com');
    expect(engineer.github).toBe('JasGitHub');

    console.log(engineer);
});

test('gets github username', () => {
    const engineer = new Engineer('Jasmine', '2', 'name@email.com', 'JasGitHub');

    expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.github.toString()));
    console.log(engineer.getGitHub());
})