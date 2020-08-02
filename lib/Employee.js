function Employee (name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
}

Employee.prototype.getName = function() {
    return `${this.name}`
};

Employee.prototype.getId = function() {
    return `ID: ${this.id}`
};

Employee.prototype.getEmail = function() {
    return `Email: ${this.email}`
};

module.exports = Employee;