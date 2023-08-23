const userinput = require('./lib/userinput');
const gensvg = require('./lib/gensvg');
const writefile = require('./lib/writefile');
const { Circle, Square, Triangle } = require('./shapes');


async function initialize() {
    console.log("Welcome to SVGArtistryHub");
    const answers = await userinput.askUserInputs();
    const shape = new (answers.shape === 'Circle' ? Circle : answers.shape === 'Square' ? Square : Triangle)();
    const svgContent = gensvg.generateSVG(answers)
    writefile.saveSVGToFile('logo.svg', svgContent);
    console.log('Generated logo.svg ')
}
initialize();

