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
            message: 'Enter  your logo text color.( you can use hexadecimal numbers )',
        },
        {
            type: 'list',
            name: 'shape',
            message: ' Please Select a shape for your SVG logo :',
            choices: ['Circle', 'Square', 'Triangle'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: ' Please enter a color for the shape for your SVG logo :',
        },
    ];

    const answers = await inquirer.prompt(questions);
    return answers;
};

module.exports = { askUserInputs };
