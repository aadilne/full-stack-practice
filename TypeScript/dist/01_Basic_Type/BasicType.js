"use strict";
// 1. What Are Types?
let btAge = 24; // Stores a number
let btName = "Aadil"; // Stores text
let btActive = true; // Stores true or false
// 2. Type Annotations
let btMarks = 85; // Explicitly declares number type
// 3. Type Inference
let btScore = 100; // TypeScript infers number
let btCity = "Ara"; // TypeScript infers string
// 4. Number Type
let btPrice = 99.5; // Stores a decimal number
let btTemp = -5; // Stores a negative number
// 5. String Type
let btGreeting = "Hello Aadil"; // Stores text
let btCode = "123"; // Stores text, not a number
// 6. Boolean Type
let btPassed = true; // Stores true
let btFailed = false; // Stores false
// 7. Null Type
let btEmpty = null; // Stores null only
let btUser = null; // String or null
// 8. Undefined Type
let btMissing = undefined; // Stores undefined only
let btOptional = undefined; // Number or undefined
// 9. Any Type
let btAny = 10; // Accepts any type
btAny = "Hello"; // Can change to string
btAny = true; // Can change to boolean
// 10. Unknown Type
let btUnknown = "TypeScript"; // Accepts any value
btUnknown = 200; // Can store a number
if (typeof btUnknown === "number") { // Checks the actual type
    console.log(btUnknown.toFixed(2)); // Safe after type checking
}
// 11. Never Type
function btThrowError() {
    throw new Error("Something went wrong"); // Throws an error
}
// 12. Void Type
function btWelcome() {
    console.log("Welcome to TypeScript"); // Prints a message
}
// Display results
console.log(btAge); // Prints 24
console.log(btName); // Prints Aadil
console.log(btActive); // Prints true
console.log(btMarks); // Prints 85
console.log(btScore); // Prints 100
console.log(btCity); // Prints Ara
console.log(btPrice); // Prints 99.5
console.log(btTemp); // Prints -5
console.log(btGreeting); // Prints Hello Aadil
console.log(btCode); // Prints 123 as text
console.log(btPassed); // Prints true
console.log(btFailed); // Prints false
console.log(btEmpty); // Prints null
console.log(btUser); // Prints null
console.log(btMissing); // Prints undefined
console.log(btOptional); // Prints undefined
console.log(btAny); // Prints true
console.log(btUnknown); // Prints 200
btWelcome(); // Calls the void function
// Uncomment this line to test the never function
// btThrowError();                       // Throws an error and stops normal execution
