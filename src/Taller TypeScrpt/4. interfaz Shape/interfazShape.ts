// 4. Define una interfaz Shape que tenga propiedades para calcular el área y una clase Rectangle que implemente esta interfaz
console.log('punto 4');
interface Shape {
  calcularArea(): number;
}

class Rectangle implements Shape {
  constructor(
    public base: number,
    public altura: number,
  ) {}

  calcularArea(): number {
    return this.base * this.altura;
  }
}

let rect = new Rectangle(5, 10);
console.log(' area del rectangulo', rect.calcularArea()); // Respuesta esperada: 50
