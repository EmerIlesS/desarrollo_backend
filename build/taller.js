console.log('taller');
const auxNumber = [1, 4, 7, 9, 15];
auxNumber.push(10, 12, 17, 17);
console.log('Array después de push:', auxNumber);
auxNumber.pop();
console.log('Array después de pop:', auxNumber);
const index1 = auxNumber.indexOf(1);
const index4 = auxNumber.indexOf(4);
const index7 = auxNumber.indexOf(7);
console.log('Índice de 1:', index1);
console.log('Índice de 4:', index4);
console.log('Índice de 7:', index7);
const subArray = auxNumber.slice(2, 9);
console.log('Subarray de la posición 2 a 9:', subArray);
const allGreaterThanOne = auxNumber.every((num) => num > 1);
console.log('Todos los elementos son mayores que 1:', allGreaterThanOne);
const anyGreaterOrEqual7 = auxNumber.some((num) => num >= 7);
console.log('Algún elemento es mayor o igual que 7:', anyGreaterOrEqual7);
const auxString = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
auxString.push('10', '11', '12', '13', '14');
console.log('Array de auxString después de push:', auxString);
const index10 = auxString.indexOf('10');
const index11 = auxString.indexOf('11');
const index14 = auxString.indexOf('14');
console.log('Índice de ', 10, ':', index10);
console.log('Índice de ', 11, ':', index11);
console.log('Índice de ', 14, ':', index14);
const message = 'bienvenidos al itp';
const wordsArray = message.split(' ');
console.log('Array de palabras:', wordsArray);
const joinedString = wordsArray.join(', ');
console.log('Cadena con palabras separadas por comas:', joinedString);
const Names = 'michael,anderson,yadir,kevin,Emerson';
const namesArray = Names.split(',');
const namesWithSpaces = namesArray.join(' ');
console.log("Array de nombres:", namesArray);
console.log("Nombres con espacios:", namesWithSpaces);
const arraysProducts = [
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
const filteredProductsWithFilter = arraysProducts.filter(product => product.praceProduct > 900);
console.log("Productos con precio mayor a 900 (filter):", filteredProductsWithFilter);
const filteredProductsWithFor = [];
for (let i = 0; i < arraysProducts.length; i++) {
    if (arraysProducts[i].praceProduct > 900) {
        filteredProductsWithFor.push(arraysProducts[i]);
    }
}
console.log("Productos con precio mayor a 900 (for):", filteredProductsWithFor);
const firstDiscountedProduct = arraysProducts.find(product => product.praceProduct > 500);
console.log("Primer producto con precio mayor a 500:", firstDiscountedProduct);
const indexGreaterThan1000 = arraysProducts.findIndex(product => product.praceProduct > 1000);
console.log("Índice del primer producto con precio mayor a 1000:", indexGreaterThan1000);
arraysProducts.push({ id: 3,
    name: 'pan',
    pace: 500,
    praceProduct: 1200 }, { id: 4,
    name: 'leche',
    pace: 150,
    praceProduct: 900 }, { id: 5,
    name: 'huevos',
    pace: 300,
    praceProduct: 1100 });
console.log("Array de productos después de agregar tres nuevos objetos:", arraysProducts);
const arays01 = [1, 2, 3, 4];
const arays02 = [6, 7, 8, 9];
const concatenatedArray = arays01.concat(arays02);
console.log('Array concatenado', concatenatedArray);
arays01.push(...arays02);
console.log('Array concatenado usando push:', arays01);
const sortedArray = concatenatedArray.sort((a, b) => b - a);
console.log('Array ordenado de mayor a menor:', sortedArray);
const reversedArray = [...sortedArray].reverse();
console.log('Array en orden descendente:', reversedArray);
//# sourceMappingURL=taller.js.map