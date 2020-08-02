const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);

        this.github = github;
    }

    getGitHub() {
        return `GitHub: <a href="https://www.github.com/${this.github}" target="_blank">${this.github}</a>`;  
    }
}

module.exports = Engineer;