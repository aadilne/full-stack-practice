

// Topic 1: Classes in TypeScript

class C12Student1 {
    name: string = "Aadil"; // Defines a class property
}

let c12Obj1 = new C12Student1(); // Creates an object
console.log(c12Obj1); // Prints the object
console.log(c12Obj1.name); // Prints Aadil


// Topic 2: Class Properties

class C12Student2 {
    name: string = "Rahul"; // Stores the student name
    age: number = 22; // Stores the student age
}

let c12Obj2 = new C12Student2(); // Creates a student object
console.log(c12Obj2.name); // Prints Rahul
console.log(c12Obj2.age); // Prints 22


// Topic 3: Constructors

class C12Student3 {
    name: string; // Declares a name property
    age: number; // Declares an age property

    constructor(n: string, a: number) { // Runs when an object is created
        this.name = n; // Assigns the name
        this.age = a; // Assigns the age
    }
}

let c12Obj3 = new C12Student3("Aadil", 24); // Passes constructor values
console.log(c12Obj3.name); // Prints Aadil
console.log(c12Obj3.age); // Prints 24


// Topic 4: Methods

class C12Calc4 {
    add(a: number, b: number): number { // Defines a class method
        return a + b; // Returns the sum
    }
}

let c12Obj4 = new C12Calc4(); // Creates a calculator object
console.log(c12Obj4.add(10, 20)); // Prints 30


// Topic 5: Access Modifiers

class C12Access5 {
    public name: string = "Aadil"; // Accessible outside the class
    private pin: number = 1234; // Accessible only inside this class
    protected city: string = "Ara"; // Accessible in this class and subclasses

    showPin(): number { // Defines a public method
        return this.pin; // Reads the private property internally
    }
}

let c12Obj5 = new C12Access5(); // Creates an object
console.log(c12Obj5.name); // Prints Aadil
console.log(c12Obj5.showPin()); // Prints 1234
// console.log(c12Obj5.pin); // Error: private property
// console.log(c12Obj5.city); // Error: protected property


// Topic 6: public

class C12Public6 {
    public name: string = "Aman"; // Declares a public property
}

let c12Obj6 = new C12Public6(); // Creates an object
console.log(c12Obj6.name); // Prints Aman

c12Obj6.name = "Ravi"; // Updates the public property
console.log(c12Obj6.name); // Prints Ravi


// Topic 7: private

class C12Private7 {
    private bal: number = 500; // Keeps the balance private

    getBal(): number { // Provides controlled access
        return this.bal; // Returns the balance
    }
}

let c12Obj7 = new C12Private7(); // Creates an account object
console.log(c12Obj7.getBal()); // Prints 500
// console.log(c12Obj7.bal); // Error: private property


// Topic 8: protected

class C12Parent8 {
    protected msg: string = "Hello"; // Allows access in subclasses
}

class C12Child8 extends C12Parent8 {
    showMsg(): string { // Defines a child method
        return this.msg; // Reads the protected property
    }
}

let c12Obj8 = new C12Child8(); // Creates a child object
console.log(c12Obj8.showMsg()); // Prints Hello
// console.log(c12Obj8.msg); // Error: protected property


// Topic 9: readonly Properties

class C12Book9 {
    readonly id: number; // Declares a readonly property

    constructor(i: number) { // Receives the initial ID
        this.id = i; // Initializes the readonly property
    }
}

let c12Obj9 = new C12Book9(101); // Creates a book object
console.log(c12Obj9.id); // Prints 101
// c12Obj9.id = 102; // Error: cannot reassign readonly property


// Topic 10: Getters and Setters

class C12User10 {
    private _age: number = 18; // Stores the age privately

    get age(): number { // Reads the age like a property
        return this._age; // Returns the stored age
    }

    set age(v: number) { // Controls how the age is updated
        if (v >= 0) { // Checks for a valid age
            this._age = v; // Saves the new age
        }
    }
}

let c12Obj10 = new C12User10(); // Creates a user object
console.log(c12Obj10.age); // Prints 18

c12Obj10.age = 24; // Calls the setter
console.log(c12Obj10.age); // Prints 24


// Topic 11: Inheritance

class C12Animal11 {
    eat(): string { // Defines a parent method
        return "Eating"; // Returns a message
    }
}

class C12Dog11 extends C12Animal11 {
    bark(): string { // Adds a child method
        return "Barking"; // Returns a message
    }
}

let c12Obj11 = new C12Dog11(); // Creates a dog object
console.log(c12Obj11.eat()); // Prints Eating
console.log(c12Obj11.bark()); // Prints Barking


// Topic 12: Method Overriding

class C12Animal12 {
    sound(): string { // Defines the parent method
        return "Animal sound"; // Returns the default sound
    }
}

class C12Dog12 extends C12Animal12 {
    override sound(): string { // Overrides the parent method
        return "Woof"; // Returns the dog sound
    }
}

let c12Obj12 = new C12Dog12(); // Creates a dog object
console.log(c12Obj12.sound()); // Prints Woof


// Topic 13: Abstract Classes

abstract class C12Shape13 {
    abstract area(): number; // Requires subclasses to implement area
}

class C12Square13 extends C12Shape13 {
    side: number = 5; // Stores the square side

    area(): number { // Implements the abstract method
        return this.side * this.side; // Calculates the area
    }
}

let c12Obj13 = new C12Square13(); // Creates a square object
console.log(c12Obj13.area()); // Prints 25
// let c12Bad13 = new C12Shape13(); // Error: cannot create abstract class object


// Topic 14: Implementing Interfaces in Classes

interface C12Printable14 {
    print(): string; // Requires a print method
}

class C12Report14 implements C12Printable14 {
    print(): string { // Implements the interface method
        return "Report ready"; // Returns a message
    }
}

let c12Obj14 = new C12Report14(); // Creates a report object
console.log(c12Obj14.print()); // Prints Report ready
