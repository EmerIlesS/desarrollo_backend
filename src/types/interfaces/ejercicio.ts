// Interfaz de objetos

interface AppUser{
  id: number;
  name: string;
  email: string;
}

const dataUser: AppUser = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',

};

// Interfaz de arrays
interface PersonData {
  name: string;
  age: number;
}

let people: PersonData[] = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 22 },
  { name: 'Diana', age: 28 },
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

// Funciones
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

// Métodos adicionales

// Método que muestra cómo usar un if/else
function checkEvenOrOdd(num: number): void {
  if (num % 2 === 0) {
    console.log(`${num} is even`);
  } else {
    console.log(`${num} is odd`);
  }
}

// Método que muestra cómo usar un for
function iterateWithFor(): void {
  console.log('Iterating with for:');
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
}

// Método que muestra cómo usar un forEach en un arreglo
function iterateArrayWithForEach(): void {
  const arr: number[] = [1, 2, 3, 4, 5, 6, 7];
  console.log('Using forEach:');
  arr.forEach((num) => {
    console.log(num);
  });
}

// Método que muestra cómo usar un while
function countdownWithWhile(start: number): void {
  console.log('Using while loop:');
  while (start > 0) {
    console.log(start);
    start--;
  }
}

// Método que muestra cómo usar un do-while
function countdownWithDoWhile(start: number): void {
  console.log('Using do-while loop:');
  do {
    console.log(start);
    start--;
  } while (start > 0);
}

// Ejecución de los métodos
checkEvenOrOdd(5); // Output: 5 is odd
checkEvenOrOdd(10); // Output: 10 is even

iterateWithFor(); // Iterates and prints numbers 0 to 4

iterateArrayWithForEach(); // Prints 1, 2, 3, 4, 5, 6, 7

countdownWithWhile(5); // Prints countdown from 5 to 1

countdownWithDoWhile(3); // Prints countdown from 3 to 1
