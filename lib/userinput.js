const inquirer = require('inquirer');

const askUserInputs = async () => {
    const questions = [
        {
            type: 'input',
            name: 'text',
            message: 'Please enter up to three characters for the SVG logo',
        },
        {
            type: 'input',
            name: 'textcolor',
            message: 'Enter logo color.( you can use hexadecimal numbers )',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select a shape:',
            choices: ['Circle', 'Square', 'Triangle'],
        },
    ];

    const answers = await inquirer.prompt(questions);
    return answers;
};

module.exports = { askUserInputs };
