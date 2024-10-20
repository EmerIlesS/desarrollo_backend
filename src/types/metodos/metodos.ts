
class ExampleMethods {
    
    // Método que muestra cómo usar un if/else
    checkNumber(num: number): void {
        if (num > 0) {
            console.log(`${num} es un número positivo.`);
        } else if (num < 0) {
            console.log(`${num} es un número negativo.`);
        } else {
            console.log(`${num} es cero.`);
        }
    }

    // Método que muestra cómo usar un for
    iterateWithFor(): void {
        console.log('Ciclo for:');
        for (let i = 1; i <= 5; i++) {
            console.log(i);
        }
    }

    // Método que muestra cómo usar un forEach
    iterateArrayWithForEach(): void {
        const arr: number[] = [1, 2, 3, 4, 5, 6, 7];
        console.log('Ciclo forEach:');
        arr.forEach((value, index) => {
            console.log(`Índice ${index}: Valor ${value}`);
        });
    }

    // Método que muestra cómo usar un while
    countdownWithWhile(start: number): void {
        console.log('Ciclo while:');
        while (start > 0) {
            console.log(start);
            start--;
        }
        console.log('¡Despegue!');
    }

    // Método que muestra cómo usar un do/while
    countdownWithDoWhile(start: number): void {
        console.log('Ciclo do/while:');
        do {
            console.log(start);
            start--;
        } while (start > 0);
        console.log('¡Despegue!');
    }
}

// Instanciar la clase para probar los métodos
const example = new ExampleMethods();

// Probar los métodos
example.checkNumber(5);       // Muestra if/else
example.iterateWithFor();     // Muestra for
example.iterateArrayWithForEach(); // Muestra forEach con un array
example.countdownWithWhile(5); // Muestra while
example.countdownWithDoWhile(5); // Muestra do/while
