"use strict";
// Topic 1: Union Types
let u10Val1 = "Aadil"; // Accepts string or number
console.log(u10Val1); // Prints Aadil
u10Val1 = 24; // Assigns a number
console.log(u10Val1); // Prints 24
// Topic 2: Using the | Operator
let u10Val2 = true; // Accepts string or boolean
console.log(u10Val2); // Prints true
u10Val2 = "Hello"; // Assigns a string
console.log(u10Val2); // Prints Hello
let u10Obj3 = { name: "Aadil", role: "Admin" }; // Requires both types
console.log(u10Obj3); // Prints the combined object
console.log(u10Obj3.role); // Prints Admin
let u10Obj4 = { name: "Rahul", age: 22 }; // Supplies both properties
console.log(u10Obj4); // Prints the object
console.log(u10Obj4.age); // Prints 22
// Topic 5: Literal Types
let u10Ans5 = "yes"; // Allows only yes or no
console.log(u10Ans5); // Prints yes
u10Ans5 = "no"; // Assigns another allowed value
console.log(u10Ans5); // Prints no
// u10Ans5 = "maybe"; // Error: maybe is not allowed
// Topic 6: String Literal Types
let u10Clr6 = "red"; // Allows three colors
console.log(u10Clr6); // Prints red
u10Clr6 = "blue"; // Assigns an allowed color
console.log(u10Clr6); // Prints blue
// u10Clr6 = "yellow"; // Error: yellow is not allowed
// Topic 7: Number Literal Types
let u10Lvl7 = 2; // Allows only 1, 2, or 3
console.log(u10Lvl7); // Prints 2
u10Lvl7 = 3; // Assigns an allowed number
console.log(u10Lvl7); // Prints 3
// u10Lvl7 = 4; // Error: 4 is not allowed
// Topic 8: Boolean Literal Types
let u10Flag8 = true; // Allows only true
console.log(u10Flag8); // Prints true
let u10Flag8b = false; // Allows only false
console.log(u10Flag8b); // Prints false
let u10Flag8c = false; // Allows either boolean value
console.log(u10Flag8c); // Prints false
function u10Area9(sh) {
    if (sh.kind === "circle") { // Narrows the type to circle
        return Math.PI * sh.radius ** 2; // Calculates circle area
    }
    return sh.side ** 2; // Calculates square area
}
console.log(u10Area9({ kind: "circle", radius: 2 })); // Prints about 12.57
console.log(u10Area9({ kind: "square", side: 4 })); // Prints 16
function u10Area10(sh) {
    switch (sh.kind) { // Checks the discriminant
        case "circle":
            return Math.PI * sh.radius ** 2; // Calculates circle area
        case "square":
            return sh.side ** 2; // Calculates square area
        default: {
            const u10Check = sh; // Errors if a case is unhandled
            return u10Check; // Confirms exhaustive handling
        }
    }
}
console.log(u10Area10({ kind: "circle", radius: 3 })); // Prints about 28.27
console.log(u10Area10({ kind: "square", side: 5 })); // Prints 25
