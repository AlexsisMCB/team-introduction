function Engineer (name, id, email, github) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
}

Engineer.prototype.getName = function() {
    return `${this.name}`
};

Engineer.prototype.getId = function() {
    return `ID: ${this.id}`
};

Engineer.prototype.getEmail = function() {
    return `Email: ${this.email}`
};

Engineer.prototype.getGitHub = function() {
    return `GitHub: <a href="https://www.github.com/${this.github}" target="_blank">${this.github}</a>`;
}

module.exports = Engineer;