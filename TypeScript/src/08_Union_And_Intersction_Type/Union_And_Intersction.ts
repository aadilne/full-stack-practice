

// Topic 1: Union Types

let u10Val1: string | number = "Aadil"; // Accepts string or number
console.log(u10Val1); // Prints Aadil

u10Val1 = 24; // Assigns a number
console.log(u10Val1); // Prints 24


// Topic 2: Using the | Operator

let u10Val2: string | boolean = true; // Accepts string or boolean
console.log(u10Val2); // Prints true

u10Val2 = "Hello"; // Assigns a string
console.log(u10Val2); // Prints Hello


// Topic 3: Intersection Types

type U10User3 = { name: string }; // Defines a name property
type U10Admin3 = { role: string }; // Defines a role property

let u10Obj3: U10User3 & U10Admin3 = { name: "Aadil", role: "Admin" }; // Requires both types
console.log(u10Obj3); // Prints the combined object
console.log(u10Obj3.role); // Prints Admin


// Topic 4: Using the & Operator

type U10Name4 = { name: string }; // Defines the name structure
type U10Age4 = { age: number }; // Defines the age structure
type U10Person4 = U10Name4 & U10Age4; // Combines both structures

let u10Obj4: U10Person4 = { name: "Rahul", age: 22 }; // Supplies both properties
console.log(u10Obj4); // Prints the object
console.log(u10Obj4.age); // Prints 22


// Topic 5: Literal Types

let u10Ans5: "yes" | "no" = "yes"; // Allows only yes or no
console.log(u10Ans5); // Prints yes

u10Ans5 = "no"; // Assigns another allowed value
console.log(u10Ans5); // Prints no

// u10Ans5 = "maybe"; // Error: maybe is not allowed


// Topic 6: String Literal Types

let u10Clr6: "red" | "blue" | "green" = "red"; // Allows three colors
console.log(u10Clr6); // Prints red

u10Clr6 = "blue"; // Assigns an allowed color
console.log(u10Clr6); // Prints blue

// u10Clr6 = "yellow"; // Error: yellow is not allowed


// Topic 7: Number Literal Types

let u10Lvl7: 1 | 2 | 3 = 2; // Allows only 1, 2, or 3
console.log(u10Lvl7); // Prints 2

u10Lvl7 = 3; // Assigns an allowed number
console.log(u10Lvl7); // Prints 3

// u10Lvl7 = 4; // Error: 4 is not allowed


// Topic 8: Boolean Literal Types

let u10Flag8: true = true; // Allows only true
console.log(u10Flag8); // Prints true

let u10Flag8b: false = false; // Allows only false
console.log(u10Flag8b); // Prints false

let u10Flag8c: true | false = false; // Allows either boolean value
console.log(u10Flag8c); // Prints false


// Topic 9: Discriminated Unions

type U10Circle9 = { kind: "circle"; radius: number }; // Defines a circle
type U10Square9 = { kind: "square"; side: number }; // Defines a square
type U10Shape9 = U10Circle9 | U10Square9; // Combines both shapes

function u10Area9(sh: U10Shape9): number { // Accepts either shape
    if (sh.kind === "circle") { // Narrows the type to circle
        return Math.PI * sh.radius ** 2; // Calculates circle area
    }

    return sh.side ** 2; // Calculates square area
}

console.log(u10Area9({ kind: "circle", radius: 2 })); // Prints about 12.57
console.log(u10Area9({ kind: "square", side: 4 })); // Prints 16


// Topic 10: Exhaustive Checking

type U10Shape10 =
    | { kind: "circle"; radius: number } // Defines a circle case
    | { kind: "square"; side: number }; // Defines a square case

function u10Area10(sh: U10Shape10): number { // Handles every shape case
    switch (sh.kind) { // Checks the discriminant
        case "circle":
            return Math.PI * sh.radius ** 2; // Calculates circle area

        case "square":
            return sh.side ** 2; // Calculates square area

        default: {
            const u10Check: never = sh; // Errors if a case is unhandled
            return u10Check; // Confirms exhaustive handling
        }
    }
}

console.log(u10Area10({ kind: "circle", radius: 3 })); // Prints about 28.27
console.log(u10Area10({ kind: "square", side: 5 })); // Prints 25
