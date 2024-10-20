console.log('punto 4');
class Rectangle {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    calcularArea() {
        return this.base * this.altura;
    }
}
let rect = new Rectangle(5, 10);
console.log(' area del rectangulo', rect.calcularArea());
//# sourceMappingURL=interfazShape.js.map