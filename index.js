const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require ('./lib/Intern');

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
            console.log(this.manager);
            employeeOptions();
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
            }
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
        this.engineer.getGitHub();
            console.log(this.engineer);
            console.log(this.engineer.getGitHub());
            employeeOptions();
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
        this.intern.getSchool();
            console.log(this.intern);
            console.log(this.intern.getSchool());
            employeeOptions();
    })
};

startApp();