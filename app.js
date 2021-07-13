const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const promptUser = () => 
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the employee's name?" ,
        },
        {
            type: "list",
            name: "role",
            message: "What is the employee's role at the company?",
            choices: ["Manager", "Engineer", "Intern"],
        },
        {
            type: "input",
            name: "id",
            message: "What is the employee's ID number?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the employee's email address?"
        },
        {
            type: "input",
            name: "office",
            message: "What is the manager's office number?",
            when: (answers) => answers.role === "Manager", 
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's GitHub username?",
            when: (answers) => answers.role === "Engineer",
        },
        {
            type: "input",
            name: "school",
            message: "What is the name of the inters school?",
            when: (answers) => answers.role === "Intern", 
        },
    ]);