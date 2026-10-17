

// Topic 1: Function Type Annotations

function add1(a1: number, b1: number): number {   // Accepts two numbers and returns a number
    return a1 + b1; 
}
console.log(add1(10, 20)); // 30


// Topic 2: Parameter Types

function greet2(n2: string): string {            // Accepts a string parameter
    return "Hello " + n2;      // Returns a greeting
}
console.log(greet2("Aadil")); // Hello Aadil


// Topic 3: Return Types

function mul3(a3: number, b3: number): number { 
    return a3 * b3; 
}
console.log(mul3(4, 5)); //20


// Topic 4: Optional Parameters

function info4(n4: string, a4?: number): string {      // Age is optional
    return a4 === undefined ? n4 : n4 + " " + a4;   // Handles both cases
}
console.log(info4("Aadil")); // Aadil
console.log(info4("Aadil", 24)); // Aadil 24


// Topic 5: Default Parameters

function bill5(p5: number, q5: number = 1): number {       // Quantity defaults to 1
    return p5 * q5;     
}
console.log(bill5(100)); // 100
console.log(bill5(100, 3)); //300


// Topic 6: Rest Parameters

function sum6(...ns6: number[]): number {       // Collects arguments into an array
    return ns6.reduce((t6, n6) => t6 + n6, 0); // Adds all numbers
}
console.log(sum6(10, 20, 30)); // 60


// Topic 7: Arrow Functions

const sub7 = (a7: number, b7: number): number => a7 - b7; // Creates an arrow function
console.log(sub7(20, 8)); // 12


// Topic 8: Function Expressions

const sq8 = function (n8: number): number {         // Stores a function in a variable
    return n8 * n8;         // Calculates the square
};
console.log(sq8(5)); //  25


// Topic 9: Function Type Definitions

type Op9 = (a9: number, b9: number) => number; // Defines a function type

const div9 : Op9 = (a9, b9) => a9 / b9; // Uses the defined function type
console.log(div9(20, 4)); //  5


// Topic 10: Callback Function Types

function calc10(a10: number, cb10: (n10: number) => number): number { // Accepts a callback
    return cb10(a10); // Calls the callback with a number
}
console.log(calc10(5, n10 => n10 * 2)); // 10


// Topic 11: Function Overloads

function fmt11(n11: number): string; // Signature for number input
function fmt11(n11: string): string; // Signature for string input
function fmt11(n11: number | string): string { // Implementation handles both types
    return String(n11); // Converts the value to a string
}
console.log(fmt11(100)); //  100
console.log(fmt11("Hello")); // Hello


// Topic 12: Void Return Type

function msg12(t12: string): void { // Returns no useful value
    console.log(t12); 
}
msg12("Welcome"); //  Welcome


// Topic 13: Never Return Type

function err13(): never { // Never completes normally
    throw new Error("Something went wrong"); // Throws an error
}

// console.log(err13()); // Do not run here: it throws an error


// Topic 14: Best Practices for Functions

function total14(p14: number, q14: number): number { // Uses clear types and names
    return p14 * q14; 
}
console.log(total14(50, 2)); // 100
