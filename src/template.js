const app = require('../app');
const Employee = require('../js/Employee');
const Engineer = require('../js/Engineer');
const Intern = require('../js/Intern');
const Manager = require('../js/Manager');


const generateHTML = (manager, engineer, intern) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    <title>Document</title>
</head>
<body>
    <div class="jumbotron text-center jumbotron-fluid bg-primary">
        <div class="container">
          <h1 class="display-5 text-white">My Team</h1>
        </div>
    </div>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col pt-2">
                <div class="card" style="width: 18rem;">
                    <div class="card-header bg-success text-white">
                    ${manager[0].getName()}: ${manager[0].getRole()}
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${manager[0].getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${manager[0].getEmail()}">${manager[0].getEmail()}</a></li>
                        <li class="list-group-item">Office Number: ${manager[0].getOfficeNumber()}</li>
                    </ul>
                </div>
            </div>
            ${generateEngineer(engineer)}
            ${generateIntern(intern)}
        </div>
    </div>       
</body>
</html>`;
