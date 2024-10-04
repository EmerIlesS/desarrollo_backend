// crear varibles  eny
// crear en la carpeta types un archivo examplestypes.ts crear variables de tipo numerico, string, boleano y any e imprimir en consola

let numer: number = 42;
let text: string = 'Hello';
let boolean: boolean = true;
let other: string = 'how are they';
let data: number = 1;

// otros tipos
// let
let numero: number = 10;
console.log(numero); // 10
numero = 20; // Reemplazando el valor
console.log(numero); // 20

// const
const PI: number = 3.14;
console.log(PI); // 3.14

const lista: number[] = [1, 2, 3];
lista.push(4); // Se puede modificar el contenido de la lista
console.log(lista); // [1, 2, 3, 4]

// Esto no es posible porque `PI` es constante
// PI = 3.14159; // Error

// any
let valor: any = 42;
console.log(valor); // 42

valor = ' Hola';
console.log(valor); // Hola

valor = true;
console.log(valor); // true

// string
let mensaje: string = 'Hola, TypeScript!';
let numeroEnTexto: string = '12345';
console.log(mensaje); // Hola, TypeScript!
console.log(numeroEnTexto); // 12345

// tuple: Permite definir un conjunto de valores predefinidos en un array con diferentes tipos.
let tupla: [string, number, boolean] = ['Texto', 42, true];
console.log(tupla); // ["Texto", 42, true]

// Acceder a los valores de la tupla
console.log(tupla[0]); // "Texto"
console.log(tupla[1]); // 42
console.log(tupla[2]); // true

// boolean: Solo permite dos valores: true o false.
let esVerdadero: boolean = true;
let esFalso: boolean = false;
console.log(esVerdadero); // true
console.log(esFalso); // false

// enum: Enumera un conjunto de constantes con valores definidos. Se usan para representar un conjunto de opciones.
enum Direccion {
  Arriba,
  Abajo,
  Izquierda,
}

let direccion: Direccion = Direccion.Arriba;
console.log(direccion); // 0 (el índice de Arriba)

enum Colores {
  Rojo = 1,
  Verde = 2,
  Azul = 3,
}

let color: Colores = Colores.Verde;
console.log(color); // 2

// void: Representa la ausencia de valor, comúnmente usado en funciones que no devuelven nada.
function saludar(): void {
  console.log('Hola, mundo!');
}

saludar(); // "Hola, mundo!"

// null y undefined: null representa la ausencia intencional de un valor; undefined significa que la variable ha sido declarada pero no se le ha asignado un valor.
let valorNulo: null = null;
// let valorIndefinido: undefined = undefined;
console.log(valorNulo); // null
// console.log(valorIndefinido); // undefined

// array
const products: Array<number> = [2, 3, 4, 6, 3];
const books: Array<any> = ['coffe', 'bread'];
const stores: number[] = [9, 4, 7, 3];
const coin: string[] = ['hola', 'hello', 'status'];
const peopleOne: any[] = ['array', 1, true, { id: 1, name: 'brayan' }];
console.log(products);
console.log(books);
console.log(stores);
console.log(coin);
console.log(peopleOne);
// tuple
let dateOne: [string, number, boolean];
dateOne = ['1', 10, true];
console.log(dateOne);
const c: Color = 0;
console.log(`\nNumero de color: ${c}`);

enum Dia { Lunes = 1, Martes, Miercoles }
const d: Dia = Dia.Miercoles;
// Usamos comillas invertas para la interpolación de variable
console.log(`Numero de ${Dia}; ${d}`);

enum Color{Rojo, Blanco }

console.log(color);
console.log(numer, 'número');
console.log(text, 'texto');
console.log(boolean, 'booleano');
console.log(other, 'otro');
console.log(data, 'data');

const Color1 : string[] = ['1', '2', '3', '4', '5'];
console.log(Color1);
// number.dateOne;
// console.log(user.name,"username");
// Array de números
let numeros: number[] = [1, 2, 3, 4];
console.log(numeros);

// Array de cadenas (strings)
let palabras: string[] = ['uno', 'dos', 'tres'];
console.log(palabras);

// Array mixto (en TypeScript sería necesario usar `any[]` si quieres varios tipos)
let mixto: any[] = [1, 'dos', true];
console.log(mixto);
// Crear un array de números usando el constructor Array
let numers: Array<number> = new Array(5); // Crea un array con 5 posiciones vacías

// Añadir valores
numeros = [1, 2, 3, 4, 5];
console.log(numers);
const numbers: Array<number> = [1, 2, 3, 4, 5];
console.log(numbers);
// Array de tuplas
/* const mixed: [number, string] = [
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
] */

const numberOne: number[] = [1, 2, 3, 4, 5];
const stringOne: string[] = ['1', '2', '3', '4', '5'];
numberOne.push(6); // añade en la ultima posision
console.log(numberOne);
numberOne.pop(); // elimina el ultimo elemento '6'

// encontrar el indice de un elemento dentro del Arry
const indexNumber = numberOne.indexOf(3); // 2

console.log(numberOne, 'numberone');
console.log(indexNumber);

const indexString = stringOne.indexOf('1'); // 2
console.log(indexString, 'indexString');

// extraer parte del Array
const sliceNumber = numberOne.slice(1, 4); // [2,3,4] tare desde la pos 1 a 4
console.log(sliceNumber);

// map para transformar los elementos
const square = numbers.map((item) => item * 2); // [2,]
console.log(square);

// filter
const evenNumber = numbers.filter((num) => num % 2 === 0); // [2,4] numeros pares
console.log(evenNumber);

const coin1 : any[] = [
  {
    id: 1,
    name: 'pesos',
    code: 'COP',
  },
  {
    id: 2,
    name: 'dolar',
    code: 'USD',
  },
  {
    id: 3,
    name: 'ecua',
    code: 'USD',
  },
];
console.log(coin1);

const coinFilter = coin.filter((coinn) => coinn.code === 'USD') // accede al objeto(s) que tenga code:'USD'
console.log(coinFilter, 'coinFiltter');

// reduce: sumar todos los elementos
const sum = numbers.reduce((acumulator, currentValue) => acumulator + currentValue, 0);
console.log(sum);
// dividir la cadena de texto en un array
const sentence : string = 'Hello world TypeScript is great';
const word : string[] = sentence.split(' ');// puede separarse como quiera poner
console.log(word, 'Split');

// join: une array con separador personalizado en un texto
const joinSentences: string = word.join('');
console.log(joinSentences);
const numberArrayCoins : number[] = [1, 2, 3];
const joinNumberArrayCoins : string = numberArrayCoins.join('_');
console.log(joinNumberArrayCoins);

// find: encontrar
const numbersTwo: number[] = [10, 20, 30, 40];
const foundNumber: number = numbersTwo.find((num) => num > 25);
console.log(foundNumber, 'foundNumber');

const foundIndex: number | undefined = numbersTwo.find((num) => num > 25);
console.log(foundIndex, 'foundIndex');

// every: debe cumplirse en todos similar a && solo devuelve true o false
const allPositive: boolean = numbersTwo.every((num) => num > 0);
console.log(allPositive, 'allPositive');

// some: los que cumplan, siimilar a ||
const someNumbers: boolean = numbersTwo.every((num) => num > 0);
console.log(someNumbers, 'allPositive');

// concat: unir arrays
const array1: number[] = [1, 2, 3];
const array2: number[] = [4, 5, 6];
const combinedArray: number[] = array1.concat(array2);
console.log(combinedArray, 'concatArray');

// sort: ordena de menor a mayor
const unsurtedNumbers: number[] = [5, 1, 2, 4, 3];
const sortedNumbers: number[] = unsurtedNumbers.sort((a, b) => a - b); // de menor a mayor, de > a < == b-a
console.log(sortedNumbers, 'sortedNumbers');

// sort: ordena en orden alfabetico
const names: string[] = ['Carlie', 'Alice', 'Bob'];
const sortedNames: string[] = names.sort();
console.log(sortedNames, 'sortedNames');

// reverse: sentido contrario
const reverseNumbers: number[] = sortedNumbers.reverse();
console.log(reverseNumbers, 'reverseNumbers');

// uso 'includes' para verificar la existencia de un elemento
const auxNumbersArray: number[] = [1, 2, 3, 4, 5, 6, 9, 2, 1];
let aut: any = [];

for (let i = 0; i < auxNumbersArray.length; i++) {
  if (!aut.includes((auxNumbersArray[i]))) {
    aut.push(auxNumbersArray[i]);
  } else {
    console.log('El numero ya existe');
  }
}

console.log(aut, 'aut');
const hasFour: boolean = numbersTwo.includes(4);
console.log(hasFour, 'hasFour');
