console.log('taller');

//1 punto
const auxNumber: number[] = [1, 4, 7, 9, 15];

// 1. Agregar elementos (10, 12, 17, 17) con push
auxNumber.push(10, 12, 17, 17);
console.log('Array después de push:', auxNumber);

// 2. Eliminar el último elemento con pop
auxNumber.pop();
console.log('Array después de pop:', auxNumber);

// 3. Encontrar el índice de los números 1, 4 y 7 con indexOf
const index1 = auxNumber.indexOf(1);
const index4 = auxNumber.indexOf(4);
const index7 = auxNumber.indexOf(7);

console.log('Índice de 1:', index1);
console.log('Índice de 4:', index4);
console.log('Índice de 7:', index7);

// 4. Extraer una parte del array de la posición 2 a la 9 con slice
 const subArray = auxNumber.slice(2, 9); // El índice 9 no es inclusivo
console.log('Subarray de la posición 2 a 9:', subArray);

// 5. Verificar si todos los elementos son mayores que 1 con every
const allGreaterThanOne = auxNumber.every((num) => num > 1);
console.log('Todos los elementos son mayores que 1:', allGreaterThanOne);

// 6. Verificar si algún elemento es mayor o igual que 7 con some
 const anyGreaterOrEqual7 = auxNumber.some((num) => num >= 7);
console.log('Algún elemento es mayor o igual que 7:', anyGreaterOrEqual7);

//  punto 2
 const auxString: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
// 1 Agregar por medio de push los auxString '10' al '14'
auxString.push('10', '11', '12', '13', '14');
console.log('Array de auxString después de push:', auxString);

// 2 Encontrar el índice de '10', '11' y '14' con indexOf
 const index10 = auxString.indexOf('10');
 const index11 = auxString.indexOf('11');
 const index14 = auxString.indexOf('14');

console.log('Índice de ', 10, ':', index10);
console.log('Índice de ', 11, ':', index11);
console.log('Índice de ', 14, ':', index14);
// 3 punto
// 1 Dividir la cadena en un array de palabras donde el separador sea el espacio con split
 const message: string = 'bienvenidos al itp';
 const wordsArray:string[] = message.split(' ');
console.log('Array de palabras:', wordsArray);

// 2 Reemplazar espacios y aplicar join para separar con comas
 const joinedString = wordsArray.join(', ');
console.log('Cadena con palabras separadas por comas:', joinedString);

//4
const Names:string='michael,anderson,yadir,kevin,Emerson'
//dividir la cadena en un array de palabras donde el separador sea las comas por split
const namesArray: string[] = Names.split(',');
//a la salida aplicar join donde separe las palabras con espacios
const namesWithSpaces: string = namesArray.join(' ');

// Imprimir el resultado
console.log("Array de nombres:", namesArray);
console.log("Nombres con espacios:", namesWithSpaces);

// 5 punto

// Inicialización del array
const arraysProducts: any[] = [
    {
    id: 1,
    name: 'arroz',
    pace: 100,
    praceProduct: 700,
    },
    {
    id: 2,
    name: 'atun',
    pace: 2500,
    praceProduct: 1500,
    },
];

  // Filtrar productos donde praceProduct sea mayor a 900 usando filter
const filteredProductsWithFilter = arraysProducts.filter(product => product.praceProduct > 900);
console.log("Productos con precio mayor a 900 (filter):", filteredProductsWithFilter);

  // Filtrar productos usando for y if
const filteredProductsWithFor: any[] = [];
for ( let i = 0; i < arraysProducts.length; i++) {
    if (arraysProducts[i].praceProduct > 900) {
    filteredProductsWithFor.push(arraysProducts[i]);
    }
}
console.log("Productos con precio mayor a 900 (for):", filteredProductsWithFor);

  // Encontrar el primer objeto donde praceProduct sea mayor a 500 usando find
const firstDiscountedProduct = arraysProducts.find(product => product.praceProduct > 500);
console.log("Primer producto con precio mayor a 500:", firstDiscountedProduct);

  // Encontrar el índice del primer elemento donde praceProduct sea mayor que 1000 usando findIndex
const indexGreaterThan1000 = arraysProducts.findIndex(product => product.praceProduct > 1000);
console.log("Índice del primer producto con precio mayor a 1000:", indexGreaterThan1000);

  // Agregar tres nuevos objetos al array usando push
arraysProducts.push(
    { id: 3, 
    name: 'pan', 
    pace: 500, 
    praceProduct: 1200 },
    { id: 4,
    name: 'leche',
    pace: 150,
    praceProduct: 900 },
    
    { id: 5, 
    name: 'huevos',
    pace: 300,
    praceProduct: 1100 }
);
console.log("Array de productos después de agregar tres nuevos objetos:", arraysProducts);

// 6 punto
// Inicialización de los arrays
const arays01: number[] = [1, 2, 3, 4];
const arays02: number[] = [6, 7, 8, 9];

// Concatenar arays01 con arays02 usando concat
const concatenatedArray = arays01.concat(arays02);
console.log('Array concatenado', concatenatedArray);

// Alternativa: Usar push para agregar los elementos de arays02 en arays01
arays01.push(...arays02);
console.log('Array concatenado usando push:', arays01);

// Ordenar el array concatenado de mayor a menor usando sort
const sortedArray = concatenatedArray.sort((a, b) => b - a);
console.log('Array ordenado de mayor a menor:', sortedArray);

// Ordenar el array concatenado en forma descendente usando reverse
const reversedArray = [...sortedArray].reverse(); // Copia del array antes de aplicar reverse
console.log('Array en orden descendente:', reversedArray);

