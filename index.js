

// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');




// TODO: Create an array of questions for user input

const questions = [
    
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'name',
        },
        {
            type: 'list',
            choices: ['BSD','MIT','GPL'] ,
            message: 'What license do you want to use?',
            name: 'lic',
        },
        {
            type: 'input',
            message: "Enter a description.",
            name: 'description',
        },
        {
            type: 'input',
            message: "Please enter Table of Content?",
            name: 'table',
        },
        {
            type: 'input',
            message: "Please enter your Installtion? ",
            name: 'Ins',
        },
        {
            type: 'input',
            message: 'Please enter ways to Use?',
            name: 'use',
        },
        {
            type: 'input',
            message: 'What is your GitHub URL?',
            name: 'github',
            link:'github.com'
        },  
        {
            type: 'input',
            message: 'Enter your Questions?',
            name: 'questions'
        },
        {
            type: 'input',
            message: 'Please enter your email address?',
            name: 'questions1'
        }
        
    ];

   
// TODO: Create a function to write README file

function init() {
    inquirer.prompt(questions).then((inquirerResponces) =>{
        fs.writeFile('README.md', generateMarkdown({...inquirerResponces}));

    });
    

}
// Function call to initialize app
init();
