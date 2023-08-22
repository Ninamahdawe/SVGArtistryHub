class Shape {
    constructor() {
        this.color = ''
    }
    setColor(color) {
        this.color = (color);

    }
}
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" width="300" height="200" fill="${this.color}" />`
    }
}
class Square extends Shape {
    render() {
        return `<rect x="50" height="200" width="300" fill="${this.color}"/>`
    }

}
class Triangle extends Shape {
    render() {
        return ` <polygon points="225,10 100,210 350,210" style="fill:${this.color}rgba(0,0,0,0);stroke:#609AAF;stroke-width:10
       />`
    }

}
module.export = { Circle, Square, Triangle }