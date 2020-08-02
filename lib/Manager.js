function Manager (name, id, email, officeNumber) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
}

Manager.prototype.getName = function() {
    return `${this.name}`;
};

Manager.prototype.getId = function() {
    return `ID: ${this.id}`;
};

Manager.prototype.getEmail = function() {
    return `Email: ${this.email}`
};

module.exports = Manager;