// 6. Crea un pequeño programa que utilice todos los conceptos anteriores:
console.log('punto 6');
// Define una interfaz Book que tenga title, author, y year
interface Book {
  title: string;
  author: string;
  year: number;
}
// Crea una clase Library que tenga un arreglo de libros y métodos para agregar y buscar libros por autor.
class Library {
  private libros: Book[] = [];

  agregarLibro(libro: Book): void {
    this.libros.push(libro);
  }

  buscarPorAutor(author: string): Book[] {
    return this.libros.filter((libro) => libro.author === author);
  }
}
// Usa métodos de clase y arreglos para interactuar con la biblioteca.
let miBiblioteca = new Library();
miBiblioteca.agregarLibro({ title: 'Cien Años de Soledad', author: 'Gabriel García Márquez', year: 1967 });
miBiblioteca.agregarLibro({ title: 'Don Quijote de la Mancha', author: 'Miguel de Cervantes', year: 1605 });

console.log(miBiblioteca.buscarPorAutor('Gabriel García Márquez'));
