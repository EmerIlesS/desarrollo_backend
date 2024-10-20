// 8. Uso de ciclos
//  1. Contar números impares con while, que hay entre 1 y 30.

console.log('punto 7');
let countImpares: number = 0;
let j: number = 1;

while (j <= 30) {
  if (j % 2 !== 0) {
    countImpares++;
  }
  j++;
}
console.log('numeros impares', countImpares); // Output: 15
