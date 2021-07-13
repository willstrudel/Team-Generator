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
            message: "What is the employee's ID number?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the employee's email address?",
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

    const addAnotherEmployee = () => 
        inquirer.prompt([
            {
                type: "confirm",
                name: "add",
                message: "Would you like to add another employee?",
            },
        ]);

    function init() {
        promptUser().then((data) => {
            switch (data.role) {
                case "Manager":
                    let newManager = new Manager(
                        data.name,
                        data.id,
                        data.email,
                        data.office,
                    );
                    employeeList.push(newManager);
                    break;
                case "Intern":
                    let newIntern = new Intern(
                        data.name,
                        data.id,
                        data.email,
                        data.school,
                    );
                    employeeList.push(newIntern);
                    break;
                case "Engineer": 
                    let newEngineer = new Engineer(
                        data.name,
                        data.id,
                        data.email,
                        data.github,
                    ); 
                    employeeList.push(newEngineer);
                    break; 
                }

                console.log("Employee data has been successfully saved!");
                addAnotherEmployee().then((data) => {
                    if(data.add) {
                        init();
                    } else {
                        fs.writeFileSync(outputPath, render(employeeList), "utf-8"),
                        (err) =>
                            err ? console.log(err) : console.log("Done!");
                            console.log("The employee file has been created.")
                    }
             });
        });
     }

     init();