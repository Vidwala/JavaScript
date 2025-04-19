// Normal function
function greet(){
    console.log("Hello World");
}

greet();

// Parameterized function
function greetings(name, age=0){
    console.log(`Hello My name is ${name} and My age is ${age}`);
}

greetings("Jayanth",25);

// Type of functions
function add(num1, num2){
    return num1 + num2;
}

function square(num){
    return num * num;
}

// console.log(add(56,89))

console.log(square(5));