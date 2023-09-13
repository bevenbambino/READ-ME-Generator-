// packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

// an array of questions for user input
const questions = [
    {
        type: "input", 
        name: "username", 
        message: "What is your GitHub username?",
    },
    {
        type: "input", 
        name: "email", 
        message: "What is your email?",
    },
    {
        type: "input", 
        name: "projectTitle", 
        message: "Type you title here",
    }, 
    {
        type: "input", 
        name: "projectDescription", 
        message: "Provide a short description explaining the what, why, and how of your project",
    },
    {
        type: "input", 
        name: "projectInstallation", 
        message: "What are the steps required to install your project? ",
    }, 
    {
        type: "input", 
        name: "projectUsage", 
        message: "Provide instructions and examples for use",
    }, 
    {
        type: "input", 
        name: "projectCredits", 
        message: "List your collaborators, if any, with links to their GitHub profiles.",
    }, 
    {
        type: "list", 
        name: "projectLicense", 
        message: "Choose your License: ",
        choices: ["MIT License", "GNU GPL v2", "Apache 2.0 License", "none"], 
    }, 
    {
        type: "input", 
        name: "projectContributing", 
        message: "If would like other developers to contribute it, include guidelines for how to do so.",
    }, 
    {
        type: "input", 
        name: "projectTests", 
        message: "Write tests for your application. Then provide examples on how to run them here.",
    }, 
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=>
        (err) ? console.log("error") : console.log("README Generated") //if else 
    )
}

// function to initialize app
function init() {
    inquirer.prompt (questions)
    .then((answers)=>{
        const markdownOutput = generateMarkdown(answers);
        writeToFile("README.md", markdownOutput)
    })
}

// Function call to initialize app
init();