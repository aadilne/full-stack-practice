"use strict";
// Topic 1: Classes in TypeScript
class C12Student1 {
    name = "Aadil"; // Defines a class property
}
let c12Obj1 = new C12Student1(); // Creates an object
console.log(c12Obj1); // Prints the object
console.log(c12Obj1.name); // Prints Aadil
// Topic 2: Class Properties
class C12Student2 {
    name = "Rahul"; // Stores the student name
    age = 22; // Stores the student age
}
let c12Obj2 = new C12Student2(); // Creates a student object
console.log(c12Obj2.name); // Prints Rahul
console.log(c12Obj2.age); // Prints 22
// Topic 3: Constructors
class C12Student3 {
    name; // Declares a name property
    age; // Declares an age property
    constructor(n, a) {
        this.name = n; // Assigns the name
        this.age = a; // Assigns the age
    }
}
let c12Obj3 = new C12Student3("Aadil", 24); // Passes constructor values
console.log(c12Obj3.name); // Prints Aadil
console.log(c12Obj3.age); // Prints 24
// Topic 4: Methods
class C12Calc4 {
    add(a, b) {
        return a + b; // Returns the sum
    }
}
let c12Obj4 = new C12Calc4(); // Creates a calculator object
console.log(c12Obj4.add(10, 20)); // Prints 30
// Topic 5: Access Modifiers
class C12Access5 {
    name = "Aadil"; // Accessible outside the class
    pin = 1234; // Accessible only inside this class
    city = "Ara"; // Accessible in this class and subclasses
    showPin() {
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
    name = "Aman"; // Declares a public property
}
let c12Obj6 = new C12Public6(); // Creates an object
console.log(c12Obj6.name); // Prints Aman
c12Obj6.name = "Ravi"; // Updates the public property
console.log(c12Obj6.name); // Prints Ravi
// Topic 7: private
class C12Private7 {
    bal = 500; // Keeps the balance private
    getBal() {
        return this.bal; // Returns the balance
    }
}
let c12Obj7 = new C12Private7(); // Creates an account object
console.log(c12Obj7.getBal()); // Prints 500
// console.log(c12Obj7.bal); // Error: private property
// Topic 8: protected
class C12Parent8 {
    msg = "Hello"; // Allows access in subclasses
}
class C12Child8 extends C12Parent8 {
    showMsg() {
        return this.msg; // Reads the protected property
    }
}
let c12Obj8 = new C12Child8(); // Creates a child object
console.log(c12Obj8.showMsg()); // Prints Hello
// console.log(c12Obj8.msg); // Error: protected property
// Topic 9: readonly Properties
class C12Book9 {
    id; // Declares a readonly property
    constructor(i) {
        this.id = i; // Initializes the readonly property
    }
}
let c12Obj9 = new C12Book9(101); // Creates a book object
console.log(c12Obj9.id); // Prints 101
// c12Obj9.id = 102; // Error: cannot reassign readonly property
// Topic 10: Getters and Setters
class C12User10 {
    _age = 18; // Stores the age privately
    get age() {
        return this._age; // Returns the stored age
    }
    set age(v) {
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
    eat() {
        return "Eating"; // Returns a message
    }
}
class C12Dog11 extends C12Animal11 {
    bark() {
        return "Barking"; // Returns a message
    }
}
let c12Obj11 = new C12Dog11(); // Creates a dog object
console.log(c12Obj11.eat()); // Prints Eating
console.log(c12Obj11.bark()); // Prints Barking
// Topic 12: Method Overriding
class C12Animal12 {
    sound() {
        return "Animal sound"; // Returns the default sound
    }
}
class C12Dog12 extends C12Animal12 {
    sound() {
        return "Woof"; // Returns the dog sound
    }
}
let c12Obj12 = new C12Dog12(); // Creates a dog object
console.log(c12Obj12.sound()); // Prints Woof
// Topic 13: Abstract Classes
class C12Shape13 {
}
class C12Square13 extends C12Shape13 {
    side = 5; // Stores the square side
    area() {
        return this.side * this.side; // Calculates the area
    }
}
let c12Obj13 = new C12Square13(); // Creates a square object
console.log(c12Obj13.area()); // Prints 25
class C12Report14 {
    print() {
        return "Report ready"; // Returns a message
    }
}
let c12Obj14 = new C12Report14(); // Creates a report object
console.log(c12Obj14.print()); // Prints Report ready
