"use strict";
// Topic 1: Function Type Annotations
function add1(a1, b1) {
    return a1 + b1;
}
console.log(add1(10, 20)); // 30
// Topic 2: Parameter Types
function greet2(n2) {
    return "Hello " + n2; // Returns a greeting
}
console.log(greet2("Aadil")); // Hello Aadil
// Topic 3: Return Types
function mul3(a3, b3) {
    return a3 * b3;
}
console.log(mul3(4, 5)); //20
// Topic 4: Optional Parameters
function info4(n4, a4) {
    return a4 === undefined ? n4 : n4 + " " + a4; // Handles both cases
}
console.log(info4("Aadil")); // Aadil
console.log(info4("Aadil", 24)); // Aadil 24
// Topic 5: Default Parameters
function bill5(p5, q5 = 1) {
    return p5 * q5;
}
console.log(bill5(100)); // 100
console.log(bill5(100, 3)); //300
// Topic 6: Rest Parameters
function sum6(...ns6) {
    return ns6.reduce((t6, n6) => t6 + n6, 0); // Adds all numbers
}
console.log(sum6(10, 20, 30)); // 60
// Topic 7: Arrow Functions
const sub7 = (a7, b7) => a7 - b7; // Creates an arrow function
console.log(sub7(20, 8)); // 12
// Topic 8: Function Expressions
const sq8 = function (n8) {
    return n8 * n8; // Calculates the square
};
console.log(sq8(5)); //  25
const div9 = (a9, b9) => a9 / b9; // Uses the defined function type
console.log(div9(20, 4)); //  5
// Topic 10: Callback Function Types
function calc10(a10, cb10) {
    return cb10(a10); // Calls the callback with a number
}
console.log(calc10(5, n10 => n10 * 2)); // 10
function fmt11(n11) {
    return String(n11); // Converts the value to a string
}
console.log(fmt11(100)); //  100
console.log(fmt11("Hello")); // Hello
// Topic 12: Void Return Type
function msg12(t12) {
    console.log(t12);
}
msg12("Welcome"); //  Welcome
// Topic 13: Never Return Type
function err13() {
    throw new Error("Something went wrong"); // Throws an error
}
// console.log(err13()); // Do not run here: it throws an error
// Topic 14: Best Practices for Functions
function total14(p14, q14) {
    return p14 * q14;
}
console.log(total14(50, 2)); // 100
