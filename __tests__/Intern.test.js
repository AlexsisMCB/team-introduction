const Intern = require('../lib/Intern.js');

test('creates Intern object with properties', () => {
    const intern = new Intern('Jordyn', 3, 'name@email.com', 'University');

    expect(intern.name).toEqual(expect.any(String));;
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));

    console.log(intern);
});

test("get the team member's name", () => {
    const intern = new Intern('Jordyn', 3, 'name@email.com', 'University');

    expect(intern.getName()).toEqual(expect.stringContaining(intern.name.toString()));
    console.log(intern.getName());
});

test("get team member's ID number", () => {
    const intern = new Intern('Jordyn', 3, 'name@email.com', 'University');

    expect(intern.getId()).toEqual(expect.stringContaining(intern.id.toString()));
    console.log(intern.getId());
});

test("get team member's email address", () => {
    const intern = new Intern('Jordyn', 3, 'name@email.com', 'University');

    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email.toString()));
    console.log(intern.getEmail());
});

test('get school info', () => {
    const intern = new Intern('Jordyn', 3, 'name@email.com', 'University');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
    console.log(intern.getSchool());
});
