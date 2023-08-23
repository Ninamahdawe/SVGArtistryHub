const { Circle, Square, Triangle } = require("./shapes");

describe('circle', () => {
    it('should render a circle with the correct fill and shape', () => {
        const shape = new Circle();
        const color = ('lime')
        shape.Setcolor(color);
        expect(shape.render).toEqual(`<circle cx="150" cy="100" r="80" width="300" height="200" fill="${this.color}" />`)
    })
})
describe('Square', () => {
    it('should render a square with the correct fill and shape', () => {
        const shape = new Square();
        const color = ('pink')
        shape.Setcolor(color);
        expect(shape.render).toEqual(`<rect x="50" height="200" width="300" fill="${this.color}"/>`)
    })
})
describe('Triangle', () => {
    it('should render a  triangle with the correct fill and shape', () => {
        const shape = new Triangle();
        const color = ('orange')
        shape.Setcolor(color);
        expect(shape.render).toEqual(`<polygon width="300" height="200"  points="0,200 300,200 150,0 fill=${this.color}" />`)
    })
})
