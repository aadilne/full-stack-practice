"use strict";
// Topic 1: Object Types
let ob1 = { name: "Aadil", age: 24 }; // Creates an object
console.log(ob1); //complete object
console.log(ob1.name); //Aadil
// Topic 2: Object Type Annotations
let ob2 = { name: "Rahul", age: 22 }; // Defines property types
console.log(ob2); // Prints the object
console.log(ob2.age); // 22
// Topic 3: Optional Properties
let ob3 = { name: "Aman" }; // Email is optional
console.log(ob3); // Prints the object without email
console.log(ob3.email); //undefined
let ob3b = { name: "Ravi", email: "ravi@example.com" }; // Includes email
console.log(ob3b.email); // ravi@example.com
// Topic 4: Readonly Properties
let ob4 = { id: 101, name: "Aadil" }; // ID cannot be reassigned
console.log(ob4); // Prints the object
console.log(ob4.id); // Prints 101
ob4.name = "Rahul"; // Updates the writable property
console.log(ob4.name); // Rahul
// ob4.id = 102; // Error: readonly property cannot be reassigned
// Topic 5: Nested Objects
let ob5 = { name: "Aadil", address: { city: "Ara", pin: 802301 } }; // Creates a nested object
console.log(ob5); // Prints the complete object
console.log(ob5.address.city); // Ara
console.log(ob5.address.pin); // 802301
let ob6 = { name: "Aadil", age: 24 }; // Provides the required properties
console.log(ob6); // Prints the object
// let ob6b: Ex6 = { name: "Aadil", age: 24, city: "Ara" }; // Error: extra property in this object literal
let ob6c = { name: "Aadil", age: 24, city: "Ara" }; // Creates an object with an extra property
console.log(ob6c); // Prints all three properties
let ob6d = ob6c; // Allowed: required properties match
console.log(ob6d); // Prints name and age
let ob7 = { name: "Aadil", age: 24 }; // Uses the type alias
console.log(ob7); //object
console.log(ob7.name); //Aadil
// Topic 8: Object Type Inference
let ob8 = { name: "Aadil", score: 90 }; // TypeScript infers the property types
console.log(ob8); // Prints the object
console.log(ob8.score); // Prints 90
ob8.score = 95; // Updates the number property
console.log(ob8.score); // Prints 95
// Topic 9: Index Signatures
let ob9 = { html: 80, css: 85 }; // Allows string keys with number values
console.log(ob9); // Prints both properties
ob9.js = 90; // Adds another numeric property
console.log(ob9.js); // Prints 90
let ob10 = "name"; // Uses a valid property key
console.log(ob10); // Prints name
function get10(obj10, key10) {
    return obj10[key10]; // Returns the selected property
}
console.log(get10({ name: "Aadil", age: 24 }, "age")); // Prints 24
// console.log(get10({ name: "Aadil", age: 24 }, "city")); // Error: city is not a valid key
// Topic 11: Object Destructuring with Types
let ob11 = { name: "Aadil", age: 24 }; // Defines the object type
console.log(ob11); // Prints the object
let { name: nm11, age: ag11 } = ob11; // Extracts typed properties
console.log(nm11); // Prints Aadil
console.log(ag11); // Prints 24
// Topic 12: Spread Operator with Typed Objects
let ob12 = { name: "Aadil", age: 24 }; // Creates the original object
console.log(ob12); // Prints the original object
let ob12b = { ...ob12, age: 25 }; // Copies properties and updates age
console.log(ob12b); // Prints the updated object
console.log(ob12b.age); // Prints 25
console.log(ob12.age); // Prints 24 because the original was not changed
