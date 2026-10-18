"use strict";
// Topic 1: What Is an Interface
let iOb1 = { name: "Aadil", age: 24 }; // Creates an interface object
console.log(iOb1); // Prints the object
console.log(iOb1.name); // Prints Aadil
let iOb2 = { title: "Book", price: 200 }; // Creates a product object
console.log(iOb2); // Prints the object
console.log(iOb2.price); // Prints 200
let iOb3 = { name: "Rahul" }; // Email is optional
console.log(iOb3); // Prints the object
console.log(iOb3.email); // Prints undefined
let iOb4 = { id: 101, name: "Aadil" }; // Creates a user object
console.log(iOb4); // Prints the object
iOb4.name = "Aman"; // Updates the name
console.log(iOb4.name); // Prints Aman
let iOb5 = {
    add(a, b) {
        return a + b; // Returns the sum
    }
};
console.log(iOb5.add(10, 20)); // Prints 30
let iMul6 = (a, b) => a * b; // Implements the function type
console.log(iMul6(4, 5)); // Prints 20
let iOb7 = { name: "Aadil", age: 24 }; // Implements both properties
console.log(iOb7); // Prints the object
console.log(iOb7.name); // Prints Aadil
let iOb8 = { name: "Aadil", age: 24, city: "Ara" }; // Implements all properties
console.log(iOb8); // Prints the object
console.log(iOb8.city); // Prints Ara
let iAr9 = [
    { name: "Pen", price: 10 }, // First product
    { name: "Book", price: 50 } // Second product
];
console.log(iAr9); // Prints the product array
console.log(iAr9[0].name); // Prints Pen
console.log(iAr9[1].price); // Prints 50
let iOb10 = {
    name: "Aadil", // Sets the name
    address: { city: "Ara", pin: 802301 } // Sets the address
};
console.log(iOb10); // Prints the complete object
console.log(iOb10.address.city); // Prints Ara
let iOb11 = { name: "Aadil", id: 101 }; // Combines both types
console.log(iOb11); // Prints the object
console.log(iOb11.id); // Prints 101
let iOb12 = { name: "Aadil", age: 24 }; // Includes merged properties
console.log(iOb12); // Prints the object
console.log(iOb12.age); // Prints 24
