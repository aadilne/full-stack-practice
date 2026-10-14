


let age: number = 25; 
console.log(age);


// let with Types

let mk: number = 80; 
console.log(mk); 

mk = 90; // Updates the variable value
console.log(mk); // Prints 90


// const with Types

const islogedin: boolean = true;  // Declares a boolean constant
console.log(islogedin); // Prints true

// islogedin = false;   // Error: cannot reassign a constant


// Type Inference in Variables

let city = "Ara"; // TypeScript infers string
console.log(city); // Prints Ara

let score = 95; // TypeScript infers number
console.log(score); // Prints 95


// Explicit Type Annotations

let user: string = "Aadil"; // Explicitly declares string type
console.log(user); // Prints Aadil

let price: number = 500; // Explicitly declares number type
console.log(price); // Prints 500


//  Reassigning Typed Variables

let qty: number = 2; 
console.log(qty); // Prints 2

qty = 5; // Assigns another number
console.log(qty); // Prints 5

// qty = "Five"; // Error: string is not a number


// Multiple Variable Declarations

let x: number = 10, y: number = 20; // Declares two variables
console.log(x); // Prints 10
console.log(y); // Prints 20
console.log(x + y); // Prints 30


// Best Practices for Variables

const tax: number = 18; // Uses const for fixed assignment
console.log(tax); // Prints 18

let cnt: number = 1; // Uses let for a changing value
console.log(cnt); // Prints 1

cnt = 2; // Updates the value
console.log(cnt); // Prints 2
