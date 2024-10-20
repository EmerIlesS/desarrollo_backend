// 8. Uso de ciclos
// 2. Imprimir números primos con for e if

console.log('punto 7');
function esPrimo(num: number): boolean {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

for (let k = 1; k <= 30; k++) {
  if (esPrimo(k)) {
    console.log('numeros primos ', k); // Output: Números primos entre 1 y 30
  }
}
