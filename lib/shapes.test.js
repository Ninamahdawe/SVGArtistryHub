const { Circle, Square, Triangle } = require("./shapes");

describe('circle', () => {
    it('should render a circle with the correct fill and shape', () => {
        const shape = new Circle();
        const color = ('lime')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" width="300" height="200" fill="${color}" />`)
    })
})
describe('Square', () => {
    it('should render a square with the correct fill and shape', () => {
        const shape = new Square();
        const color = ('pink')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" y="50" height="200" width="300" fill="${color}"/>`)
    })
})
describe('Triangle', () => {
    it('should render a  triangle with the correct fill and shape', () => {
        const shape = new Triangle();
        const color = ('orange')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon points="200,50 50,250 350,250" fill="${color}" />`)
    })
    it('should set with correct  color property', () => {
        const shape = new Triangle();
        const color = ('orange')
        shape.setColor(color);
        expect(shape.color).toEqual(color)
    })
})

