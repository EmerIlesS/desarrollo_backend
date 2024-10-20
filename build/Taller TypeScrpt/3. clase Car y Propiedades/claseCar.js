console.log('punto 3');
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    mostrarInfo() {
        console.log(` El carrro tienes la Marca: ${this.make}, Modelo: ${this.model}`);
    }
}
let miCoche = new Car('Toyota', 'Corolla');
miCoche.mostrarInfo();
//# sourceMappingURL=claseCar.js.map