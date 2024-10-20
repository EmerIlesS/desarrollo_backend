// 5. Crea un arreglo de objetos que representen libros, cada uno con propiedades como title, author, y usa filter para obtener solo los libros de un autor específico.
console.log('punto 5');
interface Book {
  title: string;
  author: string;
  year:number;
}

let libros: Book[] = [
  { title: 'Cien Años de Soleda ', author: 'Gabriel García Márque ', year: 1249 },
  { title: 'El Amor en los Tiempos del Cólera ', author: 'Gabriel García Márquez ', year: 1246 },
  { title: 'Don Quijote de la Mancha ', author: 'Miguel de Cervantez ', year: 1267 },
];

let librosDeGabriel = libros.filter((libro) => libro.author === 'Gabriel García Márquez ');
console.log('5. odjetos  ', librosDeGabriel); // Output: [{ title: 'Cien Años de Soleda ', ... }, { title: 'El Amor en los Tiempos del Cóler ', ... }]
