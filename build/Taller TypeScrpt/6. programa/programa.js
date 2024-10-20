console.log('punto 6');
class Library {
    constructor() {
        this.libros = [];
    }
    agregarLibro(libro) {
        this.libros.push(libro);
    }
    buscarPorAutor(author) {
        return this.libros.filter((libro) => libro.author === author);
    }
}
let miBiblioteca = new Library();
miBiblioteca.agregarLibro({ title: 'Cien Años de Soledad', author: 'Gabriel García Márquez', year: 1967 });
miBiblioteca.agregarLibro({ title: 'Don Quijote de la Mancha', author: 'Miguel de Cervantes', year: 1605 });
console.log(miBiblioteca.buscarPorAutor('Gabriel García Márquez'));
//# sourceMappingURL=programa.js.map