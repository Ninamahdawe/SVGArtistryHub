const { Circle, Square, Triangle } = require('./shapes');
function generateSVG(userInputs) {
    const shapeMap = {
        Circle: Circle,
        Square: Square,
        Triangle: Triangle,
    };

    const ShapeClass = shapeMap[userInputs.shape];
    const shape = new ShapeClass();
    shape.setColor(userInputs.shapeColor);

    return `
        <svg width="300" height="200">
            ${shape.render()}
            <text x="150" y="190" fill="${userInputs.textColor}" text-anchor="middle">${userInputs.text}</text>
        </svg>
    `;
};

module.exports = { generateSVG };