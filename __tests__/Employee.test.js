const Employee = require('../lib/Employee.js');

test('creates employee object with properties', () => {
    const employee = new Employee('Anonymous', 0, 'name@email.com');

    expect(employee.name).toEqual(expect.any(String));;
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

    console.log(employee);
});

test("get the team member's name", () => {
    const employee = new Employee('Anonymous', 0, 'name@email.com');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
    console.log(employee.getName());
});

test("get team member's ID number", () => {
    const employee = new Employee('Anonymous', 0, 'name@email.com');

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
    console.log(employee.getId());
});

test("get team member's email address", () => {
    const employee = new Employee('Anonymous', 0, 'name@email.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
    console.log(employee.getEmail());
});

test('get team role', () => {
    const employee = new Employee('Anonymous', 0, 'name@email.com');

    expect(employee.getRole()).toEqual(expect.any(String));
    console.log(employee.getRole());
});
