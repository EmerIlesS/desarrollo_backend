// interfaz de odjetos
interface AppUser{
id:number;
name:string;
email:string;
}
const dataUser:AppUser={
id:1,
name:'Aice',
email:'alice@example.com',
}

// interfaz de arrays
interface personData {
    name: string;
    age: number;
}

let people: personData[] = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 22 },
    { name: 'Diana', age: 28 }
];

// Herencia
class Person {
    private id: number;
    public name: string;
    protected email: string;

    constructor(id: number, name: string, email: string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    public greet(): void {
        console.log(`Hello, my name is ${this.name}. You can contact me at ${this.email}.`);
    }
}

class Employee extends Person {
    public position: string;

    constructor(id: number, name: string, email: string, position: string) {
        super(id, name, email); // Llama al constructor de la clase padre (Person)
        this.position = position;
    }

    public work(): void {
        console.log(`${this.name} is working as a ${this.position}.`);
    }
}

// Crear una instancia de Employee
const employee: Employee = new Employee(1, 'John Doe', 'john.doe@example.com', 'Software Engineer');
console.log('Clase: Employee');
console.log(employee.name, 'name'); // Output: John Doe name
employee.greet(); // Output: Hello, my name is John Doe. You can contact me at john.doe@example.com.
employee.work(); // Output: John Doe is working as a Software Engineer.


//  funciones
function addOne(a: number, b: number, c: number = 0): number {
    return a + b + c;
}

function greetOne(name: string, greeting: string = 'hello'): string {
    return `${greeting}, ${name}!`;
}

function printNumbersOne(...numbers: number[]): void {
    console.log(numbers.join(', ')); // Corrige la separación de los números
}

console.log('functions');

// Llamadas a las funciones
const responseFunction: number = addOne(5, 10);
console.log(responseFunction, 'responseFunction'); // 15

console.log(addOne(5, 10, 0)); // 15
console.log(greetOne('Alice')); // hello, Alice!
printNumbersOne(1, 2, 3, 4); // 1, 2, 3, 4



//metodo que muestra como usar un if/else
//metodo que muestra como usar  un for
// metodo que muestra como utilizar forEach
// metodo   que muestra como utilzar el forEach en un arreglo

iterateArrayWithForEach():number{
const arr:number[]=[1,2,3,4,5,6,7];
console.log('ciclo while',a);
}
// metodo que muestra como  usar un while

countdownWithWhile(start:number):number{
console.log('ciclo while: ');
while(start>0){}
}

// metodo que se muestra como usar  un do while
