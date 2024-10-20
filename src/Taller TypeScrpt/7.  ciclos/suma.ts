// 8.ciclos
// 1. Escribe un programa que sume todos los números pares del 1 al 100

console.log('punto 7');
let sumaPares: number = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    sumaPares += i;
  }
}
console.log('suma pares ', sumaPares); // Output: 2550
