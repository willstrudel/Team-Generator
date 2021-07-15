const Manager = require("./js/Manager");
const Engineer = require("./js/Engineer");
const Intern = require("./js/Intern");
const inquirer = require('inquirer');
const fs = require('fs');
const htmlTemplate = require('./src/template');
const fillEngineer = [];
const fillIntern = [];
const fillManager = [];



const managerQuestions = [{
    type: 'input',
    message: "What is the team manager's name?",
    name: 'name',
},
{
    type: 'input',
    message: "What is the team manager's id?",
    name: 'id',
},
{
    type: 'input',
    message: "What is the team manager's email?",
    name: 'email',
},
{
    type: 'input',
    message: "What is the team manager's office number?",
    name: 'office',
}];

const engineerQuestions = [{
    type: 'input',
    message: "What is your engineer's name?",
    name: 'name',
},
{
    type: 'input',
    message: "What is your engineer's id?",
    name: 'id',
},
{
    type: 'input',
    message: "What is your engineer's email?",
    name: 'email',
},
{
    type: 'input',
    message: "What is your engineer's GitHub username?",
    name: 'github',
}];

const internQuestions = [{
    type: 'input',
    message: "What is your intern's name?",
    name: 'name',
},
{
    type: 'input',
    message: "What is your intern's id?",
    name: 'id',
},
{
    type: 'input',
    message: "What is your intern's email?",
    name: 'email',
},
{
    type: 'input',
    message: "What is your intern's school?",
    name: 'school',
}];

const teamQuestion = [{ 
    type: 'list',
    message: "Which type of team member would you like to add?",
    choices: ['Engineer', 'Intern', "I don't want to add any more team members"],
    name: 'team'
}];


function init() {
    inquirer.prompt(managerQuestions)
        .then((data) => { 
            const manager = new Manager(data.name, data.id, data.email, data.office);
            fillManager.push(manager);
            teamPrompt();   
        });
    
};

function engineerTeam() {
    inquirer.prompt(engineerQuestions)
        .then((data) => {
            const engineer = new Engineer(data.name, data.id, data.email, data.github);
            fillEngineer.push(engineer);
            teamPrompt();
        });
};

function internTeam() {
    inquirer.prompt(internQuestions)
        .then((data) => {
            const intern = new Intern(data.name, data.id, data.email, data.school);
            fillIntern.push(intern);
            teamPrompt();
        });
};

function teamPrompt() {
    inquirer.prompt(teamQuestion)
    .then((newTeam) => {
        if(newTeam.team == "Engineer"){
            engineerTeam();
        } else if (newTeam.team == "Intern"){
            internTeam();
        } else {
            generateTeamPage();
        }
    });
};

function generateTeamPage() {
    const htmlContent = htmlTemplate.generateHTML(fillManager, fillEngineer, fillIntern);
    fs.writeFile('./dist/team.html', htmlContent, (err) =>
    err ? console.log(err) : console.log("Successfully created Team Profile!"));
};

     init();