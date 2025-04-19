// const fruits=['mango','strawberry'];

// fruits.pop();

// fruits.push('banana');

// fruits.unshift(true)

// console.log(Array.isArray(fruits));
// console.log(fruits.indexOf('banana'));

// // Template String
// const Age = 25;
// console.log(`My age is ${Age}`);

// console.log(n); // Hoisting Concept
// var n='jaya';

const person = {
    firstName: 'vidwala',
    lastName: 'jayanth kumar',
    age: 23,
    hobbies:['Coding','Reading Books'],
    address:{
        street:{
            address1:'Ram Nagar',
            address2:'ATP'
        },
        city: 'ATP',
        state: 'AP',
        country: 'IN'
    }
}

// console.log(person.firstName,person.lastName);
// console.log(person.address.country);

// const {firstName,lastName, hobbies, address:{street:{address1},city}} = person;

// console.log(firstName,lastName, address1);

const todos=[
    {
        id: 1,
        text: 'Go to Office',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Attend Meeting',
        isCompleted: false
    },
    {
        id: 3,
        text: 'Have Breakfast',
        isCompleted: true
    }
];

// todos.forEach((todo)=>{
//     console.log(todo.id);
// });

// const todosText = todos.map((todo)=>{
//     return todo.text;
// });

// const todosCompleted = todos.filter((todo)=>{
//     return todo.isCompleted === true;
// }).map((todo)=>{
//     return todo.text;
// });

// console.log(todosCompleted);

// Constructor function -- ES5

// function Person(fName, lName, dob){
//     this.fName = fName;
//     this.lName = lName;
//     this.dob = new Date(dob);

//     // this.getBirthYear = function() {
//     //     return this.dob.getFullYear();
//     // };

//     // this.getFullName = function() {
//     //     return `${this.fName} ${this.lName}`;
//     // };
// }

// Person.prototype.getBirthYear = function(){
//     return this.dob.getFullYear();
// };

// Person.prototype.getFullName = function(){
//     return `${this.fName} ${this.lName}`;
// };

// ES6
class Person{
    constructor(fName, lName, dob){
        this.fName = fName;
        this.lName = lName;
        this.dob = new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${this.fName} ${this.lName}`;
    }
}

const person1 = new Person('v', 'jayanth kumar', '8-25-1999');

console.log(person1.getFullName());
console.log(person1);


