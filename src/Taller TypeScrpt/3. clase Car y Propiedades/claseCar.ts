// 3. Crea una clase Car que tenga propiedades como make, model, y un método para mostrar su información
console.log('punto 3');
class Car {
  constructor(
    public make: string,
    public model: string,
  ) {
  }

  mostrarInfo(): void {
    console.log(` El carrro tienes la Marca: ${this.make}, Modelo: ${this.model}`);
  }
}

let miCoche = new Car('Toyota', 'Corolla');
miCoche.mostrarInfo(); // Output: Marca: Toyota, Modelo: Corolla
