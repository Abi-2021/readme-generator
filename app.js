// TODO: Include packages needed for this application
const inquirer = require('inquirer');

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
        message: 'Enter your project title? (required)',
        validate: function (title) {
            if (!title) {
                console.log('Please specify a project title.');
                return false;
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description (Required)',
        validate: function (title) {
            if (!title) {
                console.log('Please give a description.');
                return false;
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'installation instructions',
        message: 'List your installation instructions?',
    },
    {
        type: 'input',
        name: 'usage information',
        message: 'Provide all the usage information. ',
    },
    {
        type: 'input',
        name: 'contribution guidelines',
        message: 'What are the contribution guidelines?',
    },
    {
        type: 'input',
        name: 'test instructions',
        message: 'What are the test instructions? (required)',
        validate: function (title) {
            if (!title) {
                console.log('Please specify test instructions.');
                return false;
            }
            return true;
        }
    },
    // {
    //     type: 'input',
    //     name: 'license',
    //     message: 'Enter your project title? (required)',
    //     validate: function (title) {
    //         if (!title) {
    //             console.log('Please specify a project title');
    //             return false;
    //         }
    //         return true;
    //     }
    // },
    {
        type: 'input',
        name: 'link',
        message: 'Enter your GitHub link. (required)',
        validate: function (title) {
            if (!title) {
                console.log('Please enter your GitHub link.');
                return false;
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address? (required)',
        validate: function (title) {
            if (!title) {
                console.log('Please enter your email address.');
                return false;
            }
            return true;
        }
    }


];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {

// }
//
// // TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (answer) {
            console.log(answer)
        })
}

//
// // Function call to initialize app
 init();
