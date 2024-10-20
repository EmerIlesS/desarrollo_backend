console.log('punto 7');
function esPrimo(num) {
    if (num <= 1)
        return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0)
            return false;
    }
    return true;
}
for (let k = 1; k <= 30; k++) {
    if (esPrimo(k)) {
        console.log('numeros primos ', k);
    }
}
//# sourceMappingURL=numerosPrimos.js.map