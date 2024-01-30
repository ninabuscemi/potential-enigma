// Importing necessary modules
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions to prompt the user for README file
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the project title:'
  },

  {
    type: 'input',
    name: 'description',
    message: 'Provide a brief description of your project:'
  },

  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions:'
  },

  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage information:'
  },

  {
    type: 'input',
    name: 'contribution',
    message: 'Provide contribution guidelines:'
  },

  {
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions:'
  },

  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your application:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None']
  },

  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:'
  },
  
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:'
  }
];

// Function to write data to a file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err); // Log an error message if writing to the file fails
    } else {
      console.log(`Successfully wrote to ${fileName}`);  // Log a success message if writing is successful
    }
  });
}

// Initialization function to run the application
function init() {
    inquirer.prompt(questions) // Prompts the user with the questions array using inquirer
    .then((answers) => {
      const readmeContent = generateMarkdown(answers); // Calls the generateMarkdown function here and passes the answers object
      // to generate the README content
      writeToFile('README.md', readmeContent); // Writes the content and names the README.md file
    })
    .catch((error) => {
      console.error(error); // Logs an error if there's any issue during the inquirer prompt or README generation
    });
}

init(); // Calls the init function to start the application
