let numer = 42;
let text = 'Hello';
let boolean = true;
let other = 'how are they';
let data = 1;
let numero = 10;
console.log(numero);
numero = 20;
console.log(numero);
const PI = 3.14;
console.log(PI);
const lista = [1, 2, 3];
lista.push(4);
console.log(lista);
let valor = 42;
console.log(valor);
valor = ' Hola';
console.log(valor);
valor = true;
console.log(valor);
let mensaje = 'Hola, TypeScript!';
let numeroEnTexto = '12345';
console.log(mensaje);
console.log(numeroEnTexto);
let tupla = ['Texto', 42, true];
console.log(tupla);
console.log(tupla[0]);
console.log(tupla[1]);
console.log(tupla[2]);
let esVerdadero = true;
let esFalso = false;
console.log(esVerdadero);
console.log(esFalso);
var Direccion;
(function (Direccion) {
    Direccion[Direccion["Arriba"] = 0] = "Arriba";
    Direccion[Direccion["Abajo"] = 1] = "Abajo";
    Direccion[Direccion["Izquierda"] = 2] = "Izquierda";
})(Direccion || (Direccion = {}));
let direccion = Direccion.Arriba;
console.log(direccion);
var Colores;
(function (Colores) {
    Colores[Colores["Rojo"] = 1] = "Rojo";
    Colores[Colores["Verde"] = 2] = "Verde";
    Colores[Colores["Azul"] = 3] = "Azul";
})(Colores || (Colores = {}));
let color = Colores.Verde;
console.log(color);
function saludar() {
    console.log('Hola, mundo!');
}
saludar();
let valorNulo = null;
console.log(valorNulo);
const products = [2, 3, 4, 6, 3];
const books = ['coffe', 'bread'];
const stores = [9, 4, 7, 3];
const coin = ['hola', 'hello', 'status'];
const peopleOne = ['array', 1, true, { id: 1, name: 'brayan' }];
console.log(products);
console.log(books);
console.log(stores);
console.log(coin);
console.log(peopleOne);
let dateOne;
dateOne = ['1', 10, true];
console.log(dateOne);
const c = 0;
console.log(`\nNumero de color: ${c}`);
var Dia;
(function (Dia) {
    Dia[Dia["Lunes"] = 1] = "Lunes";
    Dia[Dia["Martes"] = 2] = "Martes";
    Dia[Dia["Miercoles"] = 3] = "Miercoles";
})(Dia || (Dia = {}));
const d = Dia.Miercoles;
console.log(`Numero de ${Dia}; ${d}`);
var Color;
(function (Color) {
    Color[Color["Rojo"] = 0] = "Rojo";
    Color[Color["Blanco"] = 1] = "Blanco";
})(Color || (Color = {}));
console.log(color);
console.log(numer, 'número');
console.log(text, 'texto');
console.log(boolean, 'booleano');
console.log(other, 'otro');
console.log(data, 'data');
const Color1 = ['1', '2', '3', '4', '5'];
console.log(Color1);
let numeros = [1, 2, 3, 4];
console.log(numeros);
let palabras = ['uno', 'dos', 'tres'];
console.log(palabras);
let mixto = [1, 'dos', true];
console.log(mixto);
let numers = new Array(5);
numeros = [1, 2, 3, 4, 5];
console.log(numers);
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
const numberOne = [1, 2, 3, 4, 5];
const stringOne = ['1', '2', '3', '4', '5'];
numberOne.push(6);
console.log(numberOne);
numberOne.pop();
const indexNumber = numberOne.indexOf(3);
console.log(numberOne, 'numberone');
console.log(indexNumber);
const indexString = stringOne.indexOf('1');
console.log(indexString, 'indexString');
const sliceNumber = numberOne.slice(1, 4);
console.log(sliceNumber);
const square = numbers.map((item) => item * 2);
console.log(square);
const evenNumber = numbers.filter((num) => num % 2 === 0);
console.log(evenNumber);
const coin1 = [
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
const coinFilter = coin.filter((coinn) => coinn.code === 'USD');
console.log(coinFilter, 'coinFiltter');
const sum = numbers.reduce((acumulator, currentValue) => acumulator + currentValue, 0);
console.log(sum);
const sentence = 'Hello world TypeScript is great';
const word = sentence.split(' ');
console.log(word, 'Split');
const joinSentences = word.join('');
console.log(joinSentences);
const numberArrayCoins = [1, 2, 3];
const joinNumberArrayCoins = numberArrayCoins.join('_');
console.log(joinNumberArrayCoins);
const numbersTwo = [10, 20, 30, 40];
const foundNumber = numbersTwo.find((num) => num > 25);
console.log(foundNumber, 'foundNumber');
const foundIndex = numbersTwo.find((num) => num > 25);
console.log(foundIndex, 'foundIndex');
const allPositive = numbersTwo.every((num) => num > 0);
console.log(allPositive, 'allPositive');
const someNumbers = numbersTwo.every((num) => num > 0);
console.log(someNumbers, 'allPositive');
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = array1.concat(array2);
console.log(combinedArray, 'concatArray');
const unsurtedNumbers = [5, 1, 2, 4, 3];
const sortedNumbers = unsurtedNumbers.sort((a, b) => a - b);
console.log(sortedNumbers, 'sortedNumbers');
const names = ['Carlie', 'Alice', 'Bob'];
const sortedNames = names.sort();
console.log(sortedNames, 'sortedNames');
const reverseNumbers = sortedNumbers.reverse();
console.log(reverseNumbers, 'reverseNumbers');
const auxNumbersArray = [1, 2, 3, 4, 5, 6, 9, 2, 1];
let aut = [];
for (let i = 0; i < auxNumbersArray.length; i++) {
    if (!aut.includes((auxNumbersArray[i]))) {
        aut.push(auxNumbersArray[i]);
    }
    else {
        console.log('El numero ya existe');
    }
}
console.log(aut, 'aut');
const hasFour = numbersTwo.includes(4);
console.log(hasFour, 'hasFour');
//# sourceMappingURL=examplesTypes.js.map