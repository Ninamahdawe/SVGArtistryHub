class Shape {
    constructor() {
        this.color = '';
    }
    setColor(color) {
        this.color = (color);

    }
}
class Circle extends Shape {
    render() {
        return `<circle cx="50%" cy="50%" r="100" width="300" height="200" fill="${this.color}" />`
    }
}
class Square extends Shape {
    render() {
        return `<rect x="50" y="50" height="200" width="300" fill="${this.color}"/>`
    }

}
class Triangle extends Shape {
    render() {
        return `<polygon points="200,50 50,250 350,250" fill="${this.color}" />`
    }

}
module.exports = { Circle, Square, Triangle };