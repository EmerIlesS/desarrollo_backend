const dataUser = {
    id: 1,
    name: 'Aice',
    email: 'alice@example.com',
};
let people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 22 },
    { name: 'Diana', age: 28 }
];
class Person {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}. You can contact me at ${this.email}.`);
    }
}
class Employee extends Person {
    constructor(id, name, email, position) {
        super(id, name, email);
        this.position = position;
    }
    work() {
        console.log(`${this.name} is working as a ${this.position}.`);
    }
}
const employee = new Employee(1, 'John Doe', 'john.doe@example.com', 'Software Engineer');
console.log('Clase: Employee');
console.log(employee.name, 'name');
employee.greet();
employee.work();
function addOne(a, b, c = 0) {
    return a + b + c;
}
function greetOne(name, greeting = 'hello') {
    return `${greeting}, ${name}!`;
}
function printNumbersOne(...numbers) {
    console.log(numbers.join(', '));
}
console.log('functions');
const responseFunction = addOne(5, 10);
console.log(responseFunction, 'responseFunction');
console.log(addOne(5, 10, 0));
console.log(greetOne('Alice'));
printNumbersOne(1, 2, 3, 4);
iterateArrayWithForEach();
number;
{
    const arr = [1, 2, 3, 4, 5, 6, 7];
    console.log('ciclo while', a);
}
countdownWithWhile(start, number);
number;
{
    console.log('ciclo while: ');
    while (start > 0) { }
}
//# sourceMappingURL=ejercicio.js.map