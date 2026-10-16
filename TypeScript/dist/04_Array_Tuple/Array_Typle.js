"use strict";
// Topic 1: Array Types
let ar1 = [10, 20, 30]; // Creates a number array
console.log(ar1);
console.log(ar1[0]); // 10
// Topic 2: String Arrays
let ar2 = ["Aadil", "Rahul", "Aman"]; // Creates a string array
console.log(ar2); // Prints all names
console.log(ar2[1]); // Prints Rahul
// Topic 3: Number Arrays
let ar3 = [100, 200, 300]; // Creates a number array
console.log(ar3);
console.log(ar3[2]); //300
// Topic 4: Boolean Arrays
let ar4 = [true, false, true]; // Creates a boolean array
console.log(ar4); // Prints all boolean values
console.log(ar4[1]); // false
// Topic 5: Using Array<T>
let ar5 = ["HTML", "CSS", "TypeScript"]; // Creates a string array
console.log(ar5); // Prints all subjects
console.log(ar5[2]); // TypeScript
let ar5b = [5, 10, 15]; // Creates a number array
console.log(ar5b); // Prints all numbers
// Topic 6: Readonly Arrays
let ar6 = [10, 20, 30]; // Creates a readonly array
console.log(ar6); // Prints all elements
console.log(ar6[1]); //20
// ar6.push(40); // Error: readonly array cannot be changed
// ar6[0] = 50; // Error: element cannot be reassigned
// Topic 7: What Are Tuples?
let tp7 = ["Aadil", 24]; // Defines fixed element types
console.log(tp7); // Prints both elements
console.log(tp7[0]); // Aadil
console.log(tp7[1]); // 24
// Topic 8: Tuple Types
let tp8 = ["Rahul", 22, true]; // Defines three typed positions
console.log(tp8); // Prints all elements
console.log(tp8[0]); //Rahul
console.log(tp8[1]); // 22
console.log(tp8[2]); // true
// Topic 9: Optional Tuple Elements
let tp9 = ["Aman"]; // Number element is optional
console.log(tp9); // Prints Aman in an array
let tp9b = ["Ravi", 25]; // Supplies the optional number
console.log(tp9b); //Ravi and 25
// Topic 10: Readonly Tuples
let tp10 = ["Aadil", 24]; // Creates a readonly tuple
console.log(tp10); // Prints both elements
console.log(tp10[0]); // Prints Aadil
console.log(tp10[1]); // Prints 24
// tp10[0] = "Rahul"; // Error: readonly tuple cannot be changed
