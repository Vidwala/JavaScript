// // Value Types
// let x = 12;
// let y = x;

// x = 14;

// console.log('Value Type : ');
// console.log(`X : ${x}`);
// console.log(`Y : ${y}`);

// // Reference Types

// let X = {value:20};
// let Y = X;

// X.value = 40;

// console.log('Reference Type : ')
// console.log('X :', X);
// console.log('Y :', Y);

// Example 1 -- Value Type
let number = 10;

function increase(number){
    number++;
}

increase(number);
console.log("Value Type Example : ")
console.log(number);

// Example 2 -- Reference Type

let obj = {value:80};

function increament(obj){
    obj.value++;
}

increament(obj);
console.log("Reference Type Example : ")
console.log(obj.value);