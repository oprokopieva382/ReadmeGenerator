//packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

//array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter your project title",
  },
  {
    type: "input",
    name: "description",
    message: "Enter your project description",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter your project description",
  },
  {
    type: "input",
    name: "installation",
    message: "Provide installation instructions",
  },
  {
    type: "input",
    name: "license",
    message: "Choose the license for your project",
    options: ["GNU", "MIT", "Apache"," None"],
  },
  {
    type: "input",
    name: "contributing",
    message: "Explain how other can contribute to the project",
  },
  {
    type: "input",
    name: "tests",
    message: "Provide test instructions",
  },
  {
    type: "input",
    name: "username",
    message: "Enter your GitHub username",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address",
  },
];

//function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.error(err) : console.log("README.md successfully generated!");
  });
}

//function to initialize app
function init() {
  inquirer.prompt(questions).then((value) => {
    const generate = generateMarkdown(value);
    writeToFile("README.md", generate);
  });
}

// Function call to initialize app
init();
