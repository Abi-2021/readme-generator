// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

const inputValidator = function (input, description) {
    if (!input) {
        console.log(description);
        return false;
    }
    return true;
}
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project? (Required)',
        validate: title => inputValidator(title, 'Enter the title of the project.')
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description (Required)',
        validate: description => inputValidator(description, 'Provide a description of the project. ')
    },
    {
        type: 'input',
        name: 'installation',
        message: 'List your installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide all the usage information. ',
    },
    {
        type: 'input',
        name: 'guidelines',
        message: 'What are the contribution guidelines?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions? (required)',
        validate: test => inputValidator(test, 'Provide test instructions for the project.')
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter your GitHub username. (required)',
        validate: githubUsername => inputValidator(githubUsername, 'Enter the GitHub username to your project.')
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address? (required)',
        validate: email => inputValidator(email, 'Provide your email address.')
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose one of the following opensource licenses.',
        choices:
            [
                'Apache 2.0',
                'Boost Software License 1.0',
                'BSD 3-Clause License',
                'BSD 2-Clause License',
                'GNU GPL v3',
                'None'
            ]
    }
];

//  TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log('Readme has been created!');
    });
}

//  TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (answer) {
            writeToFile('sample-readme.md', generateMarkdown(answer))
            console.log(answer)
        })
}

//  Function call to initialize app
init();
