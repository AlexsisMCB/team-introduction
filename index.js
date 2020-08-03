const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHtmlPage = require('./src/helper-template');
const fs = require("fs");

const startApp = function() {

    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the manager's name?"
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the manager's id number?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the manager's email address?"
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "What is the office number?"
            }
        ])
        .then (({ name, id, email, officeNumber }) => {
            this.manager = new Manager(name, id, email, officeNumber);
            this.manager.role = this.manager.getRole();
        
            employeeOptions();
            return manager;
        });
};

const employeeOptions = function() {

    return inquirer
        .prompt([
            {
                type: 'confirm',
                name: 'confirmAdd',
                message: 'Would you like to add another team member?',
                default: true
            },
            {
                type: "list",
                name: "roles",
                message: "Would you like to add a engineer or intern?",
                choices: ["Engineer", "Intern"],
                when: ({ confirmAdd }) => confirmAdd
            }
        ])
        .then (({ roles }) => {
            if (roles === "Engineer") {
                createEngineer();
            } else if (roles === "Intern") {
                createIntern();
            } else {
                console.log("Page finished!");
            }
        })
        .then(data => {
            return generateHtmlPage(data);
        })
        .then(htmlFile => {
            return writeToFile(htmlFile);
        });
};

const createEngineer = function() {

    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the engineer's id number?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email address?"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's github username?"
        }
    ])
    .then (({ name, id, email, github}) => {
        this.engineer = new Engineer(name, id, email, github);
        this.engineer.role = this.engineer.getRole();

        employeeOptions();
        return engineer;
    })
};

const createIntern = function() {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the intern's id number?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email address?"
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the intern's school?"
        }
    ])
    .then (({ name, id, email, school}) => {
        this.intern = new Intern(name, id, email, school);
        this.intern.role = this.intern.getRole();
    
        employeeOptions();
        return intern;
    });
};

function writeToFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/team-member.html", data, err => {
            if (err) {
                reject(err);
                return;
            } 
            resolve ("Success");
        })
    })
}

startApp();
    
    
