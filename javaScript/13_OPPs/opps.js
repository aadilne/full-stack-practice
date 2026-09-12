// 1 - OBJECT FOUNDATION


// Creating an Object
const stuData = {

    // Properties
    name: "Aadil",
    age: 22,

    // Nested Object
    address: {
        city: "Patna",
        state: "Bihar"
    },

    // Method
    showInfo() {

        // 'this' refers to the current object
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("City:", this.address.city);
    }
};


// Accessing Properties


console.log(stuData.name);  // Dot notation


console.log(stuData["age"]);  // Bracket notation


console.log(stuData.address.city); // Nested property


stuData.course = "MCA"; // Adding Property

stuData.age = 23; // updating Property 


// Deleting a Property

delete stuData.course;


// Calling Object Method

stuData.showInfo();


// Object inside Array
const stuList = [

    {
        name: "Rahul",
        age: 23
    },

    {
        name: "Aman",
        age: 21
    }
];


// Accessing Object inside Array

console.log(stuList[0].name);
console.log(stuList[1].name);


// Property Shorthand
const city = "Patna";
const course = "MCA";

const profile = {
    city,
    course
};

console.log(profile); 


// Computed Property Name

const key = "email";

const contact = {
    [key]: "aadil@example.com"
};

console.log(contact);


// Showing Object Data on Webpage

const nameBox = document.querySelector("#objName");
const ageBox = document.querySelector("#objAge");
const cityBox = document.querySelector("#objCity");
const btn = document.querySelector("#objBtn");


btn.addEventListener("click",  () => {

    nameBox.textContent = "Name: " + stuData.name;

    ageBox.textContent = "Age: " + stuData.age;

    cityBox.textContent = "City:" + stuData.address.city;

});



// PHASE 2 - OBJECT CREATION TECHNIQUES
//_____________________________________

// 1. OBJECT LITERAL
const bookInfo = {

    title: "JavaScript",

    pages: 300
};

console.log(bookInfo);


// 2. new Object()

const movieInfo = new Object();

movieInfo.title = "Avatar";

movieInfo.year = 2009;

console.log(movieInfo);


// 3. CONSTRUCTOR FUNCTION

function StudentInfo(name, course) {

    // `this` refers to the new Object
    // created by the `new` keyword.

    this.name = name;

    this.course = course;
}


// 4. new KEYWORD

const studentOne = new StudentInfo( "Aadil","MCA");

const studentTwo = new StudentInfo("Rahul","BCA");

console.log(studentOne);
console.log(studentTwo);


// 5. FACTORY FUNCTION

function createProduct(name, price) {

    // Factory Function returns an Object

    return {
        name: name,
        price: price
    };
}


const productOne = createProduct("Laptop",55000);

const productTwo = createProduct("Phone",30000);

console.log(productOne);
console.log(productTwo);


// 6. Object.create()

const vehicleActions = {

    start() {
        console.log("Vehicle Started");
    }
};


const bikeInfo = Object.create(vehicleActions);


// `bikeInfo` gets access to start()
// through its prototype.

bikeInfo.start();


// WEBPAGE OUTPUT

const outputBox = document.querySelector("#createOutput");

const showBtn = document.querySelector("#createBtn");


showBtn.addEventListener("click", function () {

    outputBox.textContent ="Student: " + studentOne.name +" | Course: " + studentOne.course;

});


// PHASE 3: CONSTRUCTOR FUNCTION
// 1. Creating a Constructor Function
// Student is a constructor function. It works like a blueprint for student objects.

function Student(name, age, course) {

    // "this" refers to the new object. created by the "new" keyword.
    this.name = name;
    this.age = age;
    this.course = course;
    // Constructor Function Method

    this.showInfo = function () {
        return this.name + " - " +
               this.age + " - " +
               this.course;
    };
}


// 2. Creating Multiple Objects. "new" creates a new object from Student.

let studentA = new Student("Aadil",22,"MCA");

let studentB = new Student( "Rahul", 21, "BCA");

let studentC = new Student( "Aman", 23, "BTech" );


// 3. Accessing Constructor Properties
console.log(studentA.name);
console.log(studentB.age);
console.log(studentC.course);


// 4. Calling Constructor Method

console.log(studentA.showInfo());
console.log(studentB.showInfo());
console.log(studentC.showInfo());


// 5. Showing Data in HTML
document.querySelector("#constructorOne").textContent = studentA.showInfo();

document.querySelector("#constructorTwo").textContent = studentB.showInfo();

document.querySelector("#constructorThree").textContent = studentC.showInfo();

console.log(this);


// PHASE 4 — THIS KEYWORD

// 1. THIS INSIDE OBJECT

let cameraInfo = {

    brand: "Canon",
    price: 70000,

    showCamera: function () {

        // Here "this" refers to cameraInfo object.

        return this.brand + " - ₹" + this.price;
    }
};


// 2. CONSTRUCTOR FUNCTION + THIS

function Mobile(device, cost) {

    // "this" refers to the new Mobile object.

    this.device = device;
    this.cost = cost;
}


// Create a new object using constructor.

let mobileItem = new Mobile( "Pixel", 60000);


// 3. CALL()

function showPerson(city, job) {

    // "this" is decided by call().

    return this.personName + " - " + city + " - " + job;
}


let personDelta = {
    personName: "Aman"
};


// call() immediately executes the function.

let callResult = showPerson.call( personDelta, "Patna","Developer");


// 4. APPLY()

let personEpsilon = {
    personName: "Ravi"
};


// apply() receives arguments inside an array.

let applyResult = showPerson.apply( personEpsilon, ["Delhi", "Designer"] );


// 5. BIND()

let personZeta = {
    personName: "Neha"
};


// bind() creates a new function.
// It does NOT execute immediately.

let bindResultFunction = showPerson.bind( personZeta, "Mumbai", "Manager" );


// Now the bound function is executed.

let bindResult = bindResultFunction();


// 6. ARROW FUNCTION + THIS

let arrowDemo = {

    title: "Arrow Example",

    showTitle: function () {

        // Normal function has its this.

        let arrowReader = () => {

            // Arrow function uses the outer this. 

            return this.title;
        };

        return arrowReader();
    }
};


// 7. SHOW DATA IN HTML

document.querySelector("#thisObjectOutput").textContent = "Object this: " + cameraInfo.showCamera();


document.querySelector("#thisConstructorOutput").textContent = "Constructor this: " + mobileItem.device + " - ₹" + mobileItem.cost;


document.querySelector("#thisCallOutput").textContent = "call(): " + callResult;


document.querySelector("#thisApplyOutput").textContent = "apply(): " + applyResult;


document.querySelector("#thisBindOutput").textContent = "bind(): " + bindResult;


// 8. EVENT HANDLER + THIS

let thisEventButton = document.querySelector("#thisEventButton");


let thisEventOutput = document.querySelector("#thisEventOutput");


thisEventButton.addEventListener( "click", function () {

        // In this normal event handler,
        // "this" refers to the clicked button.
        thisEventOutput.textContent ="this refers to: " + this.textContent;
    }
);




// PHASE 5 — PROTOTYPE
// 1. CONSTRUCTOR FUNCTION

function PlayerType5(name, game) {

    // These are OWN properties.
    this.name = name;
    this.game = game;
}


// 2. ADD METHOD TO PROTOTYPE

// playGame() is stored on PlayerType5.prototype.
// It is shared by objects created from PlayerType5.

PlayerType5.prototype.playGame = function () {

    return this.name + " is playing " + this.game;
};


// 3. CREATE OBJECTS

let playerItem5 = new PlayerType5("Aadil", "Cricket");

let playerItemB5 = new PlayerType5("Rahul", "Football");


// 4. OWN PROPERTIES

console.log(playerItem5.name);

console.log(playerItem5.hasOwnProperty("name")); // its return true and false


// 5. PROTOTYPE METHOD

console.log(playerItem5.playGame());

console.log(playerItemB5.playGame());


// 6. CHECK PROTOTYPE

let playerProto5 = Object.getPrototypeOf(playerItem5);

console.log(playerProto5);

console.log(playerProto5 === PlayerType5.prototype);


// 7. OBJECT PROTOTYPE

let objectProto5 = Object.getPrototypeOf(playerProto5);

console.log(objectProto5);

console.log(objectProto5 === Object.prototype);


// 8. PROTOTYPE CHAIN

console.log(Object.getPrototypeOf(PlayerType5.prototype) === Object.prototype);


// 9. OBJECT.CREATE()

let baseAccount5 = {

    login() {
        return "Account login successful";
    }
};


let newAccount5 = Object.create(baseAccount5);


// Add own property.

newAccount5.username = "Aadil";


// Access own property.

console.log(newAccount5.username);


// Access prototype method.

console.log(newAccount5.login());


// 10. OBJECT.SETPROTOTYPEOF()

let extraAbility5 = {

    useAbility() {
        return "Ability used";
    }
};


Object.setPrototypeOf(newAccount5,extraAbility5);


// Now newAccount5 can access useAbility().

console.log(newAccount5.useAbility());


// NOTE:
// After setPrototypeOf(), newAccount5's
// previous prototype baseAccount5 is replaced
// by extraAbility5.


// 11. SHOW RESULTS IN HTML

document.querySelector("#prototypeOwnText").textContent ="Own Property: " +playerItem5.name;


document.querySelector("#prototypeMethodText").textContent ="Prototype Method: " + playerItem5.playGame();


document.querySelector("#prototypeChainText").textContent ="Prototype check: " +
    (Object.getPrototypeOf(playerItem5)=== PlayerType5.prototype);


document.querySelector("#prototypeOwnCheck").textContent ="Is 'name' an own property? " + playerItem5.hasOwnProperty("name");


document.querySelector("#prototypeCreateText").textContent = "Object.create() example: " + newAccount5.username;


//PHASE 6 — CLASSES


// 1. CLASS DECLARATION

// StudentClass6 is a class.
// A class works like a blueprint.
console.log("Class start here");

class StudentClass6 {

    // Constructor runs when "new" creates an object.
    constructor(name, course) {

        // Class properties.

        this.name = name;
        this.course = course;
    }
    // Class method.
    showStudent() {
        return this.name + " - " + this.course;
    }
}

// 2. CREATING MULTIPLE OBJECTS
let classStudentAlpha6 = new StudentClass6( "Aadil", "MCA");

let classStudentBeta6 = new StudentClass6("Rahul", "BCA");


// 3. CLASS METHOD
console.log(classStudentAlpha6.showStudent());

console.log(classStudentBeta6.showStudent() );


// 4. CLASS WITHOUT EXPLICIT CONSTRUCTOR\
// JavaScript provides a default constructor.
class EmptyClass6 {
}


// Create object.
let emptyClassItem6 = new EmptyClass6();
console.log(emptyClassItem6);


// 5. CLASS EXPRESSION
// Class is stored inside a variable.
let ProductMaker6 = class {

    constructor(name, price) {

        this.name = name;
        this.price = price;
    }
    showProduct() {
        return this.name + " - ₹" + this.price;
    }
};


// Create object from class expression.

let productExpressionItem6 = new ProductMaker6( "Keyboard", 1200);


// 6. ANONYMOUS CLASS
// This class has no internal class name.

let DeviceMaker6 = class {

    constructor(name) {

        this.name = name;
    }
    showDevice() {
        return this.name;
    }
};


// Create object.

let anonymousDeviceItem6 = new DeviceMaker6("Tablet");


// 7. NAMED CLASS EXPRESSION

// DeviceUserClass6 is the internal class name.
// Named class expressions can use this name
// inside their class body.

let UserMaker6 = class DeviceUserClass6 {

    constructor(name) {

        this.name = name;
    }
    showUser() {
        return this.name;
    }
};


// Create object.

let namedUserItem6 = new UserMaker6("Aman");


// 8. SHOW RESULTS IN HTML

document.querySelector("#classStudentResult").textContent = "Class Objects: " +
    classStudentAlpha6.showStudent() + " | " + classStudentBeta6.showStudent();


document.querySelector("#classProductResult").textContent = "Class Expression: " +
    productExpressionItem6.showProduct();


document.querySelector("#classExpressionResult").textContent = "Multiple Objects: " +
    classStudentAlpha6.name + " and " + classStudentBeta6.name;


document.querySelector("#classAnonymousResult").textContent =
    "Anonymous Class: " + anonymousDeviceItem6.showDevice();


document.querySelector("#classNamedResult").textContent =
    "Named Class Expression: " + namedUserItem6.showUser();



// PHASE 7 - CLASS METHODS
// 82. INSTANCE METHOD

// This class has an instance method
class LibraryMember7 {

    constructor(memberName7) {
        this.memberName = memberName7;
    }
    // This is an instance method
    // It belongs to objects created from this class
    borrowBook7() {
        return this.memberName + " borrowed a book.";
    }
}

// Creating an object/instance
let libraryMemberAlpha7 = new LibraryMember7("Aadil");

// Calling instance method using object
document.querySelector("#instanceOutput7").textContent = libraryMemberAlpha7.borrowBook7();

// 83. CONSTRUCTOR METHOD
// constructor() automatically runs
// when an object is created using new
class CourseMember7 {

    constructor(courseTitle7, durationWeeks7) {

        // Constructor initializes object properties
        this.courseTitle = courseTitle7;
        this.durationWeeks = durationWeeks7;
    }
}

// Creating object
let courseMemberAlpha7 = new CourseMember7("JavaScript OOPs", 12);

document.querySelector("#constructorOutput7").textContent = courseMemberAlpha7.courseTitle +
    " - " + courseMemberAlpha7.durationWeeks + " weeks";

// 84. STATIC METHOD
class NumberTool7 {

    // Static method belongs to the class
    // It does not belong to individual objects
    static multiplyValues7(firstValue7, secondValue7) {

        return firstValue7 * secondValue7;
    }
}

// Calling static method using CLASS
let staticResult7 = NumberTool7.multiplyValues7(8, 5);

document.querySelector("#staticOutput7").textContent = "Static Method Result: " + staticResult7;


// 85. STATIC PROPERTY

class WebsiteInfo7 {

    // Static property belongs to the class
    static websiteName7 = "Code World";

    static websiteVersion7 = "2.0";
}

// Access static properties using class
console.log(WebsiteInfo7.websiteName7);
console.log(WebsiteInfo7.websiteVersion7);


// 86. PRIVATE METHOD

class LoginBox7 {

    // Private method
    // # means this method can only be used inside the class
    #verifyLogin7() {

        return "Login verified";
    }

    // Public method
    loginUser7() {

        // Public method can call private method
        return this.#verifyLogin7();
    }
}

let loginBoxAlpha7 = new LoginBox7();

document.querySelector("#privateOutput7").textContent = loginBoxAlpha7.loginUser7();

// 87. PUBLIC METHOD

class MusicPlayer7 {

    // Normal method is public by default
    playSong7() {

        return "Song is playing...";
    }
}

let musicPlayerAlpha7 = new MusicPlayer7();

console.log(musicPlayerAlpha7.playSong7());


// 88. PUBLIC FIELDS

class ProductBox7 {

    // These are public fields
    productName7 = "Keyboard";
    productPrice7 = 1500;
}

let productBoxAlpha7 = new ProductBox7();

// Public fields can be accessed directly
console.log(productBoxAlpha7.productName7);
console.log(productBoxAlpha7.productPrice7);

// Public fields can also be changed
productBoxAlpha7.productPrice7 = 1300;

console.log(productBoxAlpha7.productPrice7);


// 89. PRIVATE FIELD #

class DigitalWallet7 {

    // Private field
    #walletBalance7 = 5000;

    // Public method
    getWalletBalance7() {

        // Private field can be accessed inside class
        return this.#walletBalance7;
    }
}

let digitalWalletAlpha7 = new DigitalWallet7();

console.log("Wallet Balance:",digitalWalletAlpha7.getWalletBalance7());

// 90. PRIVATE METHOD #

class SecurityBox7 {

    // Private method
    #checkSecurity7() {

        return "Security check passed";
    }
    // Public method
    openBox7() {

        // Calling private method from inside class
        return this.#checkSecurity7();
    }
}

let securityBoxAlpha7 = new SecurityBox7();

console.log(securityBoxAlpha7.openBox7());


// 91. STATIC INITIALIZATION BLOCK

class ServerConfig7 {

    // Static fields
    static serverMode7 = "production";

    static serverMessage7;

    // Static initialization block
    static {

        // This code runs once when the class is evaluated
        if (ServerConfig7.serverMode7 === "production") {

            ServerConfig7.serverMessage7 = "Production server is active.";

        } else {

            ServerConfig7.serverMessage7 = "Development server is active.";
        }
    }
}
// Static initialization block has already run
document.querySelector("#initOutput7").textContent = ServerConfig7.serverMessage7;




// PHASE 8 - ENCAPSULATION
// 94. PUBLIC PROPERTY

// Public properties can be accessed directly
class PublicProfile8 {

    username = "Aadil";
    city = "Patna";
}

let publicProfileAlpha8 = new PublicProfile8();

// Direct access is allowed
document.querySelector("#publicPropertyResult8").textContent = "Public Property: " +
    publicProfileAlpha8.username + " - " + publicProfileAlpha8.city;


// 95 + 96. PRIVATE PROPERTY / PRIVATE FIELD #

class PrivateAccount8 {

    // # makes this field private
    #accountBalance8 = 45000;

    // Public method gives controlled access
    showBalance8() {

        return this.#accountBalance8;
    }
}

let privateAccountAlpha8 = new PrivateAccount8();

// We cannot directly do:
// privateAccountAlpha8.#accountBalance8
// This would cause an error.

// Instead, we use the public method
document.querySelector("#privatePropertyResult8").textContent = "Private Balance: ₹" + privateAccountAlpha8.showBalance8();


// 97. GETTER
class GetterAccount8 {

    #currentBalance8 = 25000;

    // Getter allows us to read private data
    get balance8() {

        return this.#currentBalance8;
    }
}

let getterAccountAlpha8 = new GetterAccount8();

// Getter is accessed like a property
document.querySelector("#getterResult8").textContent = "Getter Balance: ₹" + getterAccountAlpha8.balance8;


// 98. SETTER + DATA VALIDATION

class ValidationAccount8 {

    #safeBalance8 = 10000;

    // Getter
    get balance8() {

        return this.#safeBalance8;
    }

    // Setter
    set balance8(newBalance8) {

        // Validate the incoming value
        if (newBalance8 >= 0) {

            this.#safeBalance8 = newBalance8;

        } else {

            console.log("Invalid balance rejected.");
        }
    }
}

let validationAccountAlpha8 = new ValidationAccount8();

// Valid value
validationAccountAlpha8.balance8 = 18000;

// Invalid value
validationAccountAlpha8.balance8 = -5000;

// The invalid value will not replace 18000
document.querySelector("#setterValidationResult8").textContent = "Validated Balance: ₹" + validationAccountAlpha8.balance8;


// 99. READ-ONLY PROPERTY

class ReadOnlyProfile8 {

    #profileId8 = "USR-2088";

    // Getter exists
    // Setter does not exist
    get profileId8() {

        return this.#profileId8;
    }
}

let readOnlyProfileAlpha8 = new ReadOnlyProfile8();

// We can read the value
document.querySelector("#readonlyResult8").textContent = "Read-only Profile ID: " + readOnlyProfileAlpha8.profileId8;
// But there is no setter to change #profileId8.


// 100. ENCAPSULATION USING CLOSURES

function createPrivateCounter8(startValue8) {

    // This variable is private because
    // it is inside the function scope.
    let privateCount8 = startValue8;

    // Return public methods
    return {

        // Method to read private data
        getCount8() {

            return privateCount8;
        },

        // Method to change private data
        increaseCount8(stepValue8) {

            if (stepValue8 > 0) {

                privateCount8 += stepValue8;
            }
        }
    };
}

// Create closure object
let privateCounterAlpha8 = createPrivateCounter8(10);

// Increase private value
privateCounterAlpha8.increaseCount8(5);

// Read private value
document.querySelector("#closureResult8").textContent = "Closure Private Count: " + privateCounterAlpha8.getCount8();


// 101. ENCAPSULATION USING CLASSES
class SecureWallet8 {

    // Private field
    #walletMoney8 = 5000;

    // Getter-like public method
    showMoney8() {

        return this.#walletMoney8;
    }

    // Controlled modification method
    addMoney8(amountToAdd8) {

        // Only positive amounts are accepted
        if (amountToAdd8 > 0) {

            this.#walletMoney8 += amountToAdd8;
        }
    }

    // Controlled withdrawal method
    removeMoney8(amountToRemove8) {

        if (
            amountToRemove8 > 0 && amountToRemove8 <= this.#walletMoney8
        ) {

            this.#walletMoney8 -= amountToRemove8;
        }
    }
}

let secureWalletAlpha8 = new SecureWallet8();

// Add money through controlled method
secureWalletAlpha8.addMoney8(2000);

// Remove money through controlled method
secureWalletAlpha8.removeMoney8(500);

// Show final balance
document.querySelector("#classEncapsulationResult8").textContent = "Class Encapsulation Balance: ₹" + secureWalletAlpha8.showMoney8();