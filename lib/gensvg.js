const { Circle, Square, Triangle } = require('./shapes');
const generateSVG = (userInputs) => {
    console.log(userInputs)
    const shapeMap = {
        'Circle': Circle,
        'Square': Square,
        'Triangle': Triangle,
    };

    const ShapeClass = shapeMap[userInputs.shape];
    console.log(ShapeClass)
    const shape = new ShapeClass();
    shape.setColor(userInputs.shapeColor);

    return `
        <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
        ${shape.render()}
        <text x="190" y="150" fill="${userInputs.textcolor}">${userInputs.text}</text>
    </svg>
    `;
};

module.exports = { generateSVG };