// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
var questions = [];

const inquirer = require("inquirer"); //remote module
const fs = require("fs"); //shipped module
const generateMarkdown = require("./utils/generateMarkdown");

//an array of objects (below in prompt)
questions = [
  {
    type: "input",
    message: "What is the title of your application?",
    name: "title",
  },
  {
    type: "input",
    message: "Describe your project.",
    name: "project",
  },
  {
    type: "input",
    message: "Describe the installation instructions.",
    name: "install",
  },
  {
    type: "input",
    message: "Outline the usage information.",
    name: "usage",
  },
  {
    type: "input",
    message: "Outline the contributions guidelines.",
    name: "contributions",
  },
  {
    type: "input",
    message: "Detail testing information.",
    name: "testing",
  },
  {
    type: "input",
    message: "What license is your application using?",
    name: "license",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "GitHub",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];

inquirer
  .prompt(questions)
  .then((response) => writeToFile("./README.md", response));

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  data = JSON.stringify(data);
  //data = JSON.parse(data);
  fs.writeFile(fileName, data, function (err, result) {
    if (err) {
      console.log("error", err);
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  // generateMarkdown.renderLicenseBadge(questions.license);
}

// Function call to initialize app
init();
/* 
1. What is the init function suppose to do?
2. How do I hook up functions from generateMarkdown.js?
3. How do I format the README.txt file?
4. How do I link badges? 
5. How to make the questions then have those certain questions go into table fo contents to be pressed and then function to scroll down to what was pressed? 
*/
