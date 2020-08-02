function Intern (name, id, email, school) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
}

Intern.prototype.getName = function() {
    return `${this.name}`
};

Intern.prototype.getId = function() {
    return `ID: ${this.id}`
};

Intern.prototype.getEmail = function() {
    return `Email: ${this.email}`
};

Intern.prototype.getSchool = function() {
    return `School: ${this.school}`
};

module.exports = Intern;