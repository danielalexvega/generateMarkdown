const inquirer = require('inquirer');
const fs = require('fs');
const md = require('./utils/generateMarkdown.js');
const path = require('path');

const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Write a description of your project.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installationInstructions'
    },
    {
        type: 'input',
        message: 'What is the usage information?',
        name: 'usageInformation'
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'guidelines'
    },
    {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'testInstructions'
    },
    {
        type: 'list',
        message: 'What type of license do you want?',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0',
            'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
    },
    {
        type:'input', 
        message:'What is your GitHub username?',
        name:'github'
    },
    {
        type:'input', 
        message:'What is your email address?',
        name:'email'
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(),fileName), data, 'utf8');
}

// function to initialize program
function init() {
    try{
        inquirer
            .prompt(questions)
            .then(function (response) {
                writeToFile('README.md', md(response));
                console.log('Successfully created README.md')
            });
    } catch (err) {
        console.log('There was an error');
        console.log(err);
    }
}

// function call to initialize program
init();
