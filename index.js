// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
var questions = [];

const inquirer = require("inquirer"); //remote module
const fs = require("fs"); //shipped module
const generateMarkdown = require("./utils/generateMarkdown");
const { title } = require("process");

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

function makeREADME(data) {
  return;
}

inquirer.prompt(questions).then((data) => {
  fs.writeFileSync("./generatedREADME/README.md", generateMarkdown(data));
});

/* 
1. How do I link badges? 
2. License? 
*/

//badge -- return out to pull from shields io -- pulling from url -- find the path to pull beadge from and store like template sring then what user chooses to complete the template string
//Try to pass a static fucntion ${} and see if the funciton can pull the template with static value
