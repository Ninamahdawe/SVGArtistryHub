
const userinput = require('./lib/userinput');
const gensvg = require('./lib/gensvg');
const writefile = require('./lib/writefile');

async function initialize() {
    console.log("Welcome to SVGArtistryHub");
    const answers = await userinput.askUserInputs();
    const svgContent = gensvg.generateSVG(answers)
    writefile.saveSVGToFile('logo.svg', svgContent);
    console.log('Generated logo.svg ')
}
initialize();

