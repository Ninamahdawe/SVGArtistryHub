const { Circle, Square, Triangle } = require('./shapes');
const generateSVG = (userInputs) => {
    const shapeMap = {
        Circle: Circle,
        Square: Square,
        Triangle: Triangle,
    };

    const ShapeClass = shapeMap[userInputs.shape];
    const shape = new ShapeClass();
    shape.setColor(userInputs.shapeColor);

    return `
        <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
        ${shape.render()}
        <text x="10" y="20" fill="${userInputs.textcolor}">${userInputs.text}</text>
    </svg>
    `;
};

module.exports = { generateSVG };