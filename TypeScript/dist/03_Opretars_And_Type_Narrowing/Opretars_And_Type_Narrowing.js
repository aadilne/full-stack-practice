"use strict";
// Topic 1: Arithmetic Operators
let a1 = 10; // Stores the first number
let b1 = 3; // Stores the second number
console.log(a1 + b1);
console.log(a1 - b1);
console.log(a1 * b1);
console.log(a1 / b1);
console.log(a1 % b1);
console.log(a1 ** b1);
// Topic 2: Comparison Operators
let a2 = 10;
let b2 = 5;
console.log(a2 > b2);
console.log(a2 < b2);
console.log(a2 >= b2);
console.log(a2 <= b2);
console.log(a2 === b2);
console.log(a2 !== b2);
// Topic 3: Logical Operators
let a3 = true;
let b3 = false;
console.log(a3 && b3);
console.log(a3 || b3);
console.log(!a3);
// Topic 4: Assignment Operators
let n4 = 10;
console.log(n4);
n4 += 5;
console.log(n4);
n4 -= 3;
console.log(n4);
n4 *= 2;
console.log(n4);
n4 /= 4;
console.log(n4);
// Topic 5: Type Checking with typeof
let s5 = "Hello";
console.log(typeof s5);
let n5 = 25;
console.log(typeof n5);
let b5 = true;
console.log(typeof b5);
// Topic 6: Type Narrowing
let v6 = "TypeScript";
console.log(v6);
if (typeof v6 === "string") { // Checks whether the value is a string
    console.log(v6.toUpperCase()); // Prints TYPESCRIPT
}
v6 = 100;
console.log(v6);
if (typeof v6 === "number") { // Checks whether the value is a number
    console.log(v6.toFixed(2)); // Prints 100.00
}
// Topic 7: Truthiness Narrowing
let s7 = "Hello"; // Allows string or null
console.log(s7);
if (s7) { // Runs when the string is non-empty
    console.log(s7.toUpperCase()); // Prints HELLO
}
let e7 = ""; // Stores an empty string
console.log(Boolean(e7)); // Prints false
// Topic 8: Equality Narrowing
let v8 = "Aadil"; // Allows string or null
console.log(v8);
if (v8 !== null) { // Excludes null from the possible types
    console.log(v8.toUpperCase()); // Prints AADIL
}
let e8 = null; // Stores null
console.log(e8 === null); // Prints true
// Topic 9: Type Guards Basics
let v9 = 50; // Allows string or number
console.log(v9); // Prints 50
if (typeof v9 === "number") { // Acts as a type guard
    console.log(v9.toFixed(1)); // 50.0
}
else {
    //   console.log(v9.toUpperCase()); // Runs only for a string
}
// Topic 10: Type Assertions Basics
let v10 = "Welcome"; // Stores a value of unknown type
console.log(v10); // Welcome
let s10 = v10; // Tells TypeScript to treat it as a string
console.log(s10.toUpperCase()); // WELCOME
