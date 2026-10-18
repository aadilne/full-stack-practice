

// Topic 1: What Is an Interface

interface IUs1 {
    name: string; // Defines a string property
    age: number; // Defines a number property
}

let iOb1: IUs1 = { name: "Aadil", age: 24 }; // Creates an interface object
console.log(iOb1); // Prints the object
console.log(iOb1.name); // Prints Aadil


// Topic 2: Creating Interfaces

interface IPr2 {
    title: string; // Defines a title
    price: number; // Defines a price
}

let iOb2: IPr2 = { title: "Book", price: 200 }; // Creates a product object
console.log(iOb2); // Prints the object
console.log(iOb2.price); // Prints 200


// Topic 3: Optional Properties

interface IUs3 {
    name: string; // Requires a name
    email?: string; // Makes email optional
}

let iOb3: IUs3 = { name: "Rahul" }; // Email is optional
console.log(iOb3); // Prints the object
console.log(iOb3.email); // Prints undefined


// Topic 4: Readonly Properties

interface IUs4 {
    readonly id: number; // Prevents reassignment of id
    name: string; // Allows name updates
}

let iOb4: IUs4 = { id: 101, name: "Aadil" }; // Creates a user object
console.log(iOb4); // Prints the object

iOb4.name = "Aman"; // Updates the name
console.log(iOb4.name); // Prints Aman

// iOb4.id = 102; // Error: readonly property cannot be reassigned


// Topic 5: Interface Methods

interface ICal5 {
    add(a: number, b: number): number; // Defines a method
}

let iOb5: ICal5 = {
    add(a, b) { // Implements the method
        return a + b; // Returns the sum
    }
};

console.log(iOb5.add(10, 20)); // Prints 30


// Topic 6: Function Types in Interfaces

interface IFn6 {
    (a: number, b: number): number; // Defines a function signature
}

let iMul6: IFn6 = (a, b) => a * b; // Implements the function type
console.log(iMul6(4, 5)); // Prints 20


// Topic 7: Extending Interfaces

interface IAn7 {
    name: string; // Defines a name
}

interface IUs7 extends IAn7 {
    age: number; // Adds an age property
}

let iOb7: IUs7 = { name: "Aadil", age: 24 }; // Implements both properties
console.log(iOb7); // Prints the object
console.log(iOb7.name); // Prints Aadil


// Topic 8: Multiple Interface Inheritance

interface INm8 {
    name: string; // Defines a name
}

interface IAg8 {
    age: number; // Defines an age
}

interface IUs8 extends INm8, IAg8 {
    city: string; // Adds a city property
}

let iOb8: IUs8 = { name: "Aadil", age: 24, city: "Ara" }; // Implements all properties
console.log(iOb8); // Prints the object
console.log(iOb8.city); // Prints Ara


// Topic 9: Interfaces with Arrays

interface IPr9 {
    name: string; // Defines a product name
    price: number; // Defines a product price
}

let iAr9: IPr9[] = [
    { name: "Pen", price: 10 }, // First product
    { name: "Book", price: 50 } // Second product
];

console.log(iAr9); // Prints the product array
console.log(iAr9[0].name); // Prints Pen
console.log(iAr9[1].price); // Prints 50


// Topic 10: Interfaces with Objects

interface IAd10 {
    city: string; // Defines a city
    pin: number; // Defines a PIN code
}

interface IUs10 {
    name: string; // Defines a name
    address: IAd10; // Defines a nested object
}

let iOb10: IUs10 = {
    name: "Aadil", // Sets the name
    address: { city: "Ara", pin: 802301 } // Sets the address
};

console.log(iOb10); // Prints the complete object
console.log(iOb10.address.city); // Prints Ara


// Topic 11: Interface vs Type Alias

interface IUs11 {
    name: string; // Defines a name
}

type IId11 = {
    id: number; // Defines an ID
};

let iOb11: IUs11 & IId11 = { name: "Aadil", id: 101 }; // Combines both types
console.log(iOb11); // Prints the object
console.log(iOb11.id); // Prints 101


// Topic 12: Declaration Merging

interface IUs12 {
    name: string; // Adds the name property
}

interface IUs12 {
    age: number; // Merges the age property
}

let iOb12: IUs12 = { name: "Aadil", age: 24 }; // Includes merged properties
console.log(iOb12); // Prints the object
console.log(iOb12.age); // Prints 24
