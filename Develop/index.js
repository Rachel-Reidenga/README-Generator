// TODO: Include packages needed for this application
const inquirer = require("inquirer")
// TODO: Create an array of questions for user input
const questions = [];

inquirer
    .prompt([
        {
            type: "input",
            name: "user-name",
            message: "What is your GitHub username?",
        },

        {
            type: "input",
            name: "email",
            message: "What is your email address?",
        },

        {
            type: "input",
            name: "projectName",
            message: "What is the name of your project?",
        },

        {
            type: "input",
            name: "description",
            message: "Please write a short description of your project",
        },

        {
            type: "input",
            name: "usage",
            message: "Please write a short description of what you project is used for",
        },

        {
            type: "input",
            name: "license",
            message: "What kind of license should your project have?",
        },

        {
            type: "input",
            name: "command",
            message: "What command should be run to instal dependencies?",
        },

        {
            type: "input",
            name: "test",
            message: "What command should be run to run tests?",
        },

        {
            type: "input",
            name: "repo",
            message: "What does the user need to know about using the repo?",
        },

        {
            type: "input",
            name: "contributing",
            message: "What does the user need to know about contributing to the repo?",
        },



    ])
    .then(answers => {
        console.log(answer.user-name);
        console.log(answer.email);
        console.log(answer.projectName);
        console.log(answer.description);
        console.log(answer.usage);
        console.log(answer.license);
        console.log(answer.command);
        console.log(answer.test);
        console.log(answer.repo); 
        console.log(answer.contributing);
    })

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
