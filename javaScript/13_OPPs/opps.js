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
document.querySelector("#classEncapsulationResult8").textContent =
    "Class Encapsulation Balance: ₹" + secureWalletAlpha8.showMoney8();



// PHASE 9 - GETTERS AND SETTERS
// 102 + 103. WHAT IS GETTER / get KEYWORD

class ProfileManager9 {

    // Private field
    #displayName9 = "Aadil";

    // Getter
    // Used to read the private value
    get displayName9() {

        return this.#displayName9;
    }
}

// Create object
let profileManagerAlpha9 = new ProfileManager9();

// Getter is accessed like a property
document.querySelector("#getterDisplay9").textContent ="Getter Value: " + profileManagerAlpha9.displayName9;


// 104 + 105. WHAT IS SETTER / set KEYWORD

class NicknameManager9 {

    #nickname9 = "Coder";

    // Getter
    get nickname9() {

        return this.#nickname9;
    }

    // Setter
    // Used to update the private value
    set nickname9(newNickname9) {

        this.#nickname9 = newNickname9;
    }
}

let nicknameManagerAlpha9 = new NicknameManager9();

// Setter is triggered by assignment
nicknameManagerAlpha9.nickname9 = "JavaScript Coder";

// Getter reads the updated value
document.querySelector("#setterDisplay9").textContent = "Setter Updated Value: " + nicknameManagerAlpha9.nickname9;


// 106. GETTER VS NORMAL METHOD

class NameReader9 {

    #personName9 = "Aadil";

    // Normal method
    showName9() {

        return this.#personName9;
    }

    // Getter
    get name9() {

        return this.#personName9;
    }
}

let nameReaderAlpha9 = new NameReader9();

// Normal method requires ()
let normalMethodValue9 = nameReaderAlpha9.showName9();

// Getter does not require ()
let getterValue9 = nameReaderAlpha9.name9;

document.querySelector("#methodGetterDisplay9").textContent = "Normal Method: " + normalMethodValue9 +
            " | Getter: " + getterValue9;


// 107. SETTER VALIDATION

class AgeValidator9 {

    #userAge9 = 18;

    // Getter
    get userAge9() {

        return this.#userAge9;
    }

    // Setter with validation
    set userAge9(newAge9) {

        // Only allow age from 0 to 120
        if (newAge9 >= 0 && newAge9 <= 120) {

            this.#userAge9 = newAge9;

        } else {

            console.log("Invalid age rejected.");
        }
    }
}

let ageValidatorAlpha9 = new AgeValidator9();

// Valid value
ageValidatorAlpha9.userAge9 = 25;

// Invalid value
ageValidatorAlpha9.userAge9 = -50;

// Invalid value will not replace 25
document.querySelector("#validationDisplay9").textContent =
    "Validated Age: " + ageValidatorAlpha9.userAge9;


// 108. READ-ONLY PROPERTY

class ProductIdentity9 {

    // Private ID
    #identityCode9 = "ITEM-9009";

    // Getter only
    get identityCode9() {

        return this.#identityCode9;
    }

    // No setter exists
}

let productIdentityAlpha9 = new ProductIdentity9();

// Reading is allowed
document.querySelector("#readonlyDisplay9").textContent ="Read-only ID: " + productIdentityAlpha9.identityCode9;


// 109 + 110. GETTER + SETTER WITH PRIVATE FIELD

class SecureBalance9 {

    // Private field
    #accountMoney9 = 15000;

    // Getter
    get accountMoney9() {

        return this.#accountMoney9;
    }

    // Setter
    set accountMoney9(newMoney9) {

        // Do not allow negative money
        if (newMoney9 >= 0) {

            this.#accountMoney9 = newMoney9;

        } else {

            console.log("Negative balance rejected.");
        }
    }
}

let secureBalanceAlpha9 = new SecureBalance9();

// Update through setter
secureBalanceAlpha9.accountMoney9 = 20000;

// Read through getter
document.querySelector("#privateFieldDisplay9").textContent = "Private Field Balance: ₹" + 
            secureBalanceAlpha9.accountMoney9;



// PHASE 10 - INHERITANCE
// INHERITANCE + PARENT + CHILD + extends
// Parent class
class VehicleFamily10 {

    startVehicle10() {
        return "Vehicle started";
    }

    stopVehicle10() {
        return "Vehicle stopped";
    }
}

// Child class  extends creates inheritance
class CarFamily10 extends VehicleFamily10 {

    driveCar10() {
        return "Car is driving";
    }
}

// Create child object
let carFamilyAlpha10 = new CarFamily10();

// Child can use its own method
let childMethodValue10 = carFamilyAlpha10.driveCar10();

// Child can also use parent method
let parentMethodValue10 = carFamilyAlpha10.startVehicle10();

document.querySelector("#parentChildResult10").textContent = childMethodValue10 + " | " + parentMethodValue10;


// super() + CALLING PARENT CONSTRUCTOR
// Parent class
class WorkerBase10 {

    constructor(workerName10) {

        this.workerName = workerName10;
    }

    showWorker10() {

        return this.workerName;
    }
}

// Child class
class DeveloperChild10 extends WorkerBase10 {

    constructor(workerName10, codingSkill10) {

        // super() calls parent constructor
        super(workerName10);        // super() method always call before child this.anyName

        // Child's own property
        this.codingSkill = codingSkill10;
    }

    showSkill10() {

        return this.codingSkill;
    }
}

// Create child object
let developerChildAlpha10 = new DeveloperChild10( "Aadil", "JavaScript");

document.querySelector("#superConstructorResult10").textContent = developerChildAlpha10.showWorker10() +
        " knows " + developerChildAlpha10.showSkill10();


// 118. CALLING PARENT METHOD

class AnimalBaseFamily10 {

    eatFood10() {

        return "Animal is eating";
    }
}

class DogFamily10 extends AnimalBaseFamily10 {

    barkDog10() {

        return "Dog is barking";
    }
}

let dogFamilyAlpha10 = new DogFamily10();

// Parent method
let parentEatingValue10 = dogFamilyAlpha10.eatFood10();

// Child method
let childBarkingValue10 = dogFamilyAlpha10.barkDog10();

document.querySelector("#parentMethodResult10").textContent = parentEatingValue10 + " | " + childBarkingValue10;


// 119. METHOD OVERRIDING

class NotificationBase10 {

    sendMessage10() {

        return "Generic notification";
    }
}

class EmailNotification10 extends NotificationBase10 {

    // Same method name
    // Child provides its own implementation
    sendMessage10() {

        return "Email notification sent";
    }
}

let emailNotificationAlpha10 = new EmailNotification10();

document.querySelector("#overrideResult10").textContent = emailNotificationAlpha10.sendMessage10();


// 120. MULTILEVEL INHERITANCE

// Level 1
class LivingBase10 {

    breathe10() {

        return "Breathing";
    }
}

// Level 2
class AnimalLevel10 extends LivingBase10 {

    eat10() {

        return "Eating";
    }
}

// Level 3
class DogLevel10 extends AnimalLevel10 {

    bark10() {

        return "Barking";
    }
}

let dogLevelAlpha10 = new DogLevel10();

document.querySelector("#multilevelResult10").textContent = dogLevelAlpha10.breathe10() + " | " +
    dogLevelAlpha10.eat10() + " | " + dogLevelAlpha10.bark10();


// 121. HIERARCHICAL INHERITANCE

// One parent
class ShapeBase10 {

    showShape10() {

        return "This is a shape";
    }
}

// Child 1
class CircleChild10 extends ShapeBase10 {

}

// Child 2
class SquareChild10 extends ShapeBase10 {

}

let circleChildAlpha10 = new CircleChild10();
let squareChildAlpha10 = new SquareChild10();

document.querySelector("#hierarchicalResult10").textContent = circleChildAlpha10.showShape10() +
    " | " + squareChildAlpha10.showShape10();


// 122. SINGLE INHERITANCE

// One parent
class DeviceParent10 {

    powerOn10() {

        return "Device powered on";
    }
}

// One child
class PhoneChild10 extends DeviceParent10 {

}

let phoneChildAlpha10 = new PhoneChild10();

console.log(phoneChildAlpha10.powerOn10());


// 123. PROTOTYPE-BASED INHERITANCE

// Parent constructor function
function VehiclePrototype10(vehicleName10) {

    this.vehicleName = vehicleName10;
}

// Parent prototype method
VehiclePrototype10.prototype.move10 = function () {

    return this.vehicleName + " is moving";
};


// Child constructor function
function BikePrototype10(vehicleName10) {

    // Call parent constructor
    VehiclePrototype10.call(this, vehicleName10);
}


// Connect child prototype to parent prototype
BikePrototype10.prototype = Object.create(VehiclePrototype10.prototype);


// Restore correct constructor reference
BikePrototype10.prototype.constructor = BikePrototype10;


// Create child object
let bikePrototypeAlpha10 = new BikePrototype10("Bike");

document.querySelector("#prototypeResult10").textContent = bikePrototypeAlpha10.move10();


// 124. CLASS-BASED INHERITANCE

// Parent class
class MachineParent10 {

    operate10() {

        return "Machine operating";
    }
}

// Child class using extends
class PrinterChild10 extends MachineParent10 {

    printPaper10() {

        return "Printing paper";
    }
}

let printerChildAlpha10 = new PrinterChild10();

document.querySelector("#classInheritanceResult10").textContent = printerChildAlpha10.operate10() +
    " | " + printerChildAlpha10.printPaper10();


// PHASE 11 - super KEYWORD


// What is super? super() Constructor

// Parent class
class SuperParent11 {

    constructor() {
        this.parentTitle11 = "Parent Class";

        console.log("Parent constructor called");
    }

    // Parent method
    showParentInfo11() {
        return "Message from Parent";
    }
}


// Child class extends Parent
class SuperChild11 extends SuperParent11 {

    constructor() {

        // super() calls the Parent constructor
        // It must come before using this
        super();

        this.childTitle11 = "Child Class";

        console.log("Child constructor called");
    }
}


// Creating child object
const superChildAlpha11 = new SuperChild11();


// super.method()
class SuperMethodParent11 {

    showParentMessage11() {
        return "Parent method is running";
    }
}


class SuperMethodChild11 extends SuperMethodParent11 {

    showChildMessage11() {

        // super.method() calls the Parent method
        return super.showParentMessage11();
    }
}


const superMethodChildAlpha11 = new SuperMethodChild11();

document.querySelector("#superMethodOutput11").textContent = superMethodChildAlpha11.showChildMessage11();


// Parent Constructor Access

class SuperDataParent11 {

    constructor(productName11) {

        // Parent receives product name
        this.productName11 = productName11;
    }
}


class SuperDataChild11 extends SuperDataParent11 {

    constructor(productName11, productPrice11) {

        // Send productName to Parent constructor
        super(productName11);

        // Child property
        this.productPrice11 = productPrice11;
    }
}


const superDataChildAlpha11 = new SuperDataChild11("Laptop", 55000);


document.querySelector("#superParentConstructorOutput11").textContent = "Product: " +
    superDataChildAlpha11.productName11 + " | Price: ₹" + superDataChildAlpha11.productPrice11;


// Parent Method Access

class SuperActionParent11 {

    startService11() {
        return "Parent service started";
    }
}


class SuperActionChild11 extends SuperActionParent11 {

    startChildService11() {

        // Calling Parent method
        const parentServiceText11 = super.startService11();

        return parentServiceText11 + " → Child service is ready";
    }
}


const superActionChildAlpha11 = new SuperActionChild11();


document.querySelector("#superParentMethodOutput11").textContent =
    superActionChildAlpha11.startChildService11();


// super with Method Overriding

class SuperOverrideParent11 {

    showStatus11() {

        return "Parent: Basic system active";
    }
}


class SuperOverrideChild11 extends SuperOverrideParent11 {

    showStatus11() {

        // Calling Parent's original method
        const parentStatus11 = super.showStatus11();

        // Adding Child's own behavior
        return parentStatus11 + " | Child: Advanced system active";
    }
}


const superOverrideChildAlpha11 = new SuperOverrideChild11();


document.querySelector("#superOverrideOutput11").textContent = superOverrideChildAlpha11.showStatus11();


// Important super Rules

class SuperRuleParent11 {

    constructor(userName11) {

        this.userName11 = userName11;
    }

    showUser11() {

        return "User: " + this.userName11;
    }
}


class SuperRuleChild11 extends SuperRuleParent11 {

    constructor(userName11, userRole11) {

        // RULE:
// super() must be called before this
        super(userName11);

        // Now this can be safely used
        this.userRole11 = userRole11;
    }

    showCompleteUser11() {

        // super.method() accesses Parent method
        const parentUser11 = super.showUser11();

        return parentUser11 +" | Role: " + this.userRole11;
    }
}


const superRuleChildAlpha11 = new SuperRuleChild11("Aadil", "Developer");


document.querySelector("#superConstructorOutput11").textContent =
    "Parent + Child constructor executed successfully";


document.querySelector("#superRulesOutput11").textContent = superRuleChildAlpha11.showCompleteUser11();


// Extra Example Static method + super

// super can also be used with Parent static methods

class SuperStaticParent11 {

    static getCompany11() {

        return "Parent Company";
    }
}


class SuperStaticChild11 extends SuperStaticParent11 {

    static getCompanyInfo11() {

        // Access Parent static method
        return super.getCompany11() + " → Child Division";
    }
}


document.querySelector("#superRulesOutput11").textContent += " | " + SuperStaticChild11.getCompanyInfo11();



// PHASE 12 - POLYMORPHISM

// What is Polymorphism?
// Parent class
class PolyAnimal12 {

    makeSound12() {

        return "Animal makes a sound";
    }
}

// Dog changes the behavior
class PolyDog12 extends PolyAnimal12 {

    makeSound12() {

        // Method overriding
        return "Dog says: Bark";
    }
}


// Cat changes the behavior
class PolyCat12 extends PolyAnimal12 {

    makeSound12() {

        // Method overriding
        return "Cat says: Meow";
    }
}


const polyDogAlpha12 = new PolyDog12();

const polyCatAlpha12 = new PolyCat12();


// Same method
// Different behavior
const polyBasicText12 = polyDogAlpha12.makeSound12() + " | " + polyCatAlpha12.makeSound12();


document.querySelector("#polyBasicOutput12").textContent = polyBasicText12;


// Method Overriding
// Runtime Polymorphism
// This function does not care
// whether the object is Dog or Cat.
function runAnimalSound12(animalItem12) {

    // JavaScript decides at runtime
    // which makeSound12() should run.
    return animalItem12.makeSound12();
}


const polyRuntimeDog12 = runAnimalSound12(polyDogAlpha12);


const polyRuntimeCat12 = runAnimalSound12(polyCatAlpha12);


document.querySelector("#polyRuntimeOutput12").textContent = polyRuntimeDog12 + " | " + polyRuntimeCat12;


// Polymorphism using Inheritance

class PolyPayment12 {

    processPayment12() {

        return "Generic payment";
    }
}


class PolyCardPayment12 extends PolyPayment12 {

    processPayment12() {

        return "Payment processed using Card";
    }
}


class PolyUpiPayment12 extends PolyPayment12 {

    processPayment12() {

        return "Payment processed using UPI";
    }
}


const polyCardAlpha12 = new PolyCardPayment12();

const polyUpiAlpha12 = new PolyUpiPayment12();


document.querySelector("#polyInheritanceOutput12").textContent = polyCardAlpha12.processPayment12() +
    " | " + polyUpiAlpha12.processPayment12();


// Polymorphism using Duck Typing

// Object 1
const polySpeakerObject12 = {

    speak12() {

        return "Human is speaking";
    }
};


// Object 2
const polyRobotObject12 = {

    speak12() {

        return "Robot is speaking";
    }
};


// No inheritance is required.
// The function only needs speak12().
function startSpeaking12(speakerItem12) {

    return speakerItem12.speak12();
}


const polyHumanText12 = startSpeaking12(polySpeakerObject12);


const polyRobotText12 = startSpeaking12(polyRobotObject12);


document.querySelector("#polyDuckOutput12").textContent = polyHumanText12 + " | " + polyRobotText12;


// JavaScript vs Java Polymorphism
// JavaScript can use objects based on behavior.
// Here we don't check the object's class.

function executeAction12(actionItem12) {

    return actionItem12.perform12();
}


const polyJsObject12 = {

    perform12() {

        return "JavaScript object performed the action";
    }
};


document.querySelector("#polyLanguageOutput12").textContent = executeAction12(polyJsObject12);


// Function Overloading Concept
// Limitations in JavaScript
// JavaScript does not support traditional
// function overloading by parameter signature.

// Instead, we can use rest parameters.
function calculateTotal12(...amountList12) {

    let totalAmount12 = 0;


    // Add every received value
    for (const amountItem12 of amountList12) {

        totalAmount12 += amountItem12;
    }


    return totalAmount12;
}


const polyTwoAmount12 = calculateTotal12(100, 200);

const polyThreeAmount12 = calculateTotal12(100, 200, 300);


document.querySelector("#polyOverloadOutput12").textContent = "2 values = ₹" + polyTwoAmount12 +
 " | 3 values = ₹" + polyThreeAmount12;



// PHASE 13 - ABSTRACTION
// What is Abstraction? Why Abstraction?

class PaymentService13 {

    // Public method
    // User only needs to call this method
    makePayment13(amountValue13) {

        // Hidden internal steps
        const validAmount13 = this.checkAmount13(amountValue13);

        if (!validAmount13) {

            return "Invalid payment amount";
        }

        const paymentResult13 = this.processPayment13(amountValue13);

        return paymentResult13;
    }

    // Internal validation method
    checkAmount13(amountValue13) {

        return amountValue13 > 0;
    }


    // Internal payment process
    processPayment13(amountValue13) {

        return "Payment of ₹" + amountValue13 + " completed";
    }
}


const paymentServiceAlpha13 = new PaymentService13();

document.querySelector( "#abstractionBasicOutput13").textContent =paymentServiceAlpha13.makePayment13(500);


// Real-world Abstraction

class CarControl13 {

    startCar13() {

        // User sees only startCar13()
        // Internal engine steps stay hidden

        const fuelCheck13 = this.checkFuel13();

        if (!fuelCheck13) {

            return "Car cannot start";
        }

        const engineStart13 = this.startEngine13();

        return engineStart13;
    }


    checkFuel13() {
        return true;
    }

    startEngine13() {
        return "Car started successfully";
    }
}


const carControlAlpha13 = new CarControl13();


document.querySelector("#abstractionRealWorldOutput13").textContent = carControlAlpha13.startCar13();


// Abstraction using Methods

class OrderService13 {

    placeOrder13() {

        // User calls only one simple method

        this.checkOrder13();

        this.prepareOrder13();

        return this.confirmOrder13();
    }


    // Hidden implementation
    checkOrder13() {

        return true;
    }


    // Hidden implementation
    prepareOrder13() {
        return true;
    }


    // Hidden implementation
    confirmOrder13() {

        return "Order placed successfully";
    }
}


const orderServiceAlpha13 = new OrderService13();

document.querySelector("#abstractionMethodOutput13").textContent = orderServiceAlpha13.placeOrder13();


// Abstraction using Classes

class ReportGenerator13 {

    generateReport13() {

        // User only calls generateReport13()
        // Complex work stays inside the class

        const dataText13 = this.collectData13();

        const reportText13 =this.createReport13(dataText13);

        return reportText13;
    }

    collectData13() {

        return "Sales data";
    }


    createReport13(dataText13) {

        return dataText13 + " → Report generated";
    }
}


const reportGeneratorAlpha13 = new ReportGenerator13();

document.querySelector( "#abstractionClassOutput13").textContent = reportGeneratorAlpha13.generateReport13();


// Abstraction using Closures

function createSecureAccount13(initialBalance13) {

    // Private variable
    // It cannot be accessed directly outside
    let hiddenBalance13 = initialBalance13;

    return {

        // Controlled access
        getBalance13() {

            return hiddenBalance13;
        },


        // Controlled update
        addMoney13(amountValue13) {

            if (amountValue13 > 0) {

                hiddenBalance13 += amountValue13;
            }

            return hiddenBalance13;
        }

    };
}


const secureAccountAlpha13 = createSecureAccount13(1000);

secureAccountAlpha13.addMoney13(500);

document.querySelector( "#abstractionClosureOutput13" ).textContent = "Available balance: ₹" + secureAccountAlpha13.getBalance13();


// Abstract Class Concept
// Abstract Methods Concept
// True Abstract Class Concept in JavaScript

class ShapeBase13 {

    constructor() {

        // Prevent direct object creation
        if (new.target === ShapeBase13) {

            throw new Error("ShapeBase13 cannot be created directly");
        }
    }


    calculateArea13() {

        // Force child class to implement this method
        throw new Error("Child class must implement calculateArea13()");
    }
}


// Child class
class CircleShape13 extends ShapeBase13 {

    constructor(radiusValue13) {

        super();

        this.radiusValue13 = radiusValue13;
    }


    calculateArea13() {

        // Circle area formula
        return Math.PI *this.radiusValue13 *this.radiusValue13;
    }
}


// Create Child object
const circleShapeAlpha13 =new CircleShape13(5);

const circleAreaValue13 =circleShapeAlpha13.calculateArea13();

document.querySelector("#abstractionAbstractOutput13").textContent ="Circle area: " +
circleAreaValue13.toFixed(2) + " | Abstract behavior implemented by Child";


// Phase 14 - Static Members
// 1. What is Static?

class SchoolCenter14 {

    // This property belongs to the class
    static schoolName = "Bright Future School";
}

const staticBasicItem14 = SchoolCenter14.schoolName;

document.getElementById("staticBasicView14").textContent = "Static property: " + staticBasicItem14;


// 2. Static Method

class MathCenter14 {

    // This method belongs to the class
    static addNumbers14(firstNumber14, secondNumber14) {

        return firstNumber14 + secondNumber14;
    }
}

const staticMethodResult14 = MathCenter14.addNumbers14(20, 30);

document.getElementById("staticMethodView14").textContent = "20 + 30 = " + staticMethodResult14;


// 3. Static Property

class CompanyCenter14 {

    // Static properties belong to the class
    static companyName14 = "Code World";
    static employeeTotal14 = 150;
}

document.getElementById("staticPropertyView14").textContent = CompanyCenter14.companyName14 +" | Employees: " +
    CompanyCenter14.employeeTotal14;


// 4. Static vs Instance Property

class CustomerCenter14 {

    constructor(customerName14) {

        // Instance property
        this.customerName14 = customerName14;
    }

    // Static property
    static customerType14 = "Premium";
}

const customerAlpha14 = new CustomerCenter14("Aadil");

const customerBeta14 = new CustomerCenter14("Rahul");

const instancePropertyText14 =customerAlpha14.customerName14 + " / " + customerBeta14.customerName14;

const staticPropertyText14 = CustomerCenter14.customerType14;

document.getElementById("staticInstanceView14").textContent = "Instance: " + instancePropertyText14 +
       " | Static: " + staticPropertyText14;


// 5. Static vs Instance Method

class ServiceCenter14 {

    constructor(serviceName14) {

        this.serviceName14 = serviceName14;
    }

    // Instance method
    showService14() {

        return this.serviceName14;
    }

    // Static method
    static showCategory14() {

        return "Software Service";
    }
}

const serviceItem14 = new ServiceCenter14("Web Development");

const instanceMethodResult14 = serviceItem14.showService14();

const staticMethodResultCompare14 = ServiceCenter14.showCategory14();

document.getElementById("staticMethodCompare14").textContent = "Instance Method: " + instanceMethodResult14 +
    " | Static Method: " + staticMethodResultCompare14;

// 6. Accessing Static Members

class StoreCenter14 {

    static storeName14 = "Digital Store";

    static showStore14() {

        // this refers to the class here
        return this.storeName14;
    }
}

const staticStoreName14 = StoreCenter14.storeName14;

const staticStoreMessage14 = StoreCenter14.showStore14();

document.getElementById("staticAccessView14").textContent = staticStoreName14 + " | " + staticStoreMessage14;


// 7. Static Members with Inheritance

class CompanyParent14 {

    static companyCategory14 = "Technology";

    static showCategory14() {

        return this.companyCategory14;
    }
}

class CompanyChild14 extends CompanyParent14 {

}

const inheritedStaticValue14 = CompanyChild14.companyCategory14;

const inheritedStaticMethod14 = CompanyChild14.showCategory14();

document.getElementById("staticInheritanceView14").textContent = "Inherited Property: " + inheritedStaticValue14 +
    " | Inherited Method: " + inheritedStaticMethod14;

// 8. Static Initialization Block

class ApplicationCenter14 {

    static applicationName14 = "My Application";

    static statusMessage14;

    // Static block runs once during class initialization
    static {

        ApplicationCenter14.statusMessage14 = "Application configuration loaded";
    }
}

const staticBlockMessage14 = ApplicationCenter14.statusMessage14;

document.getElementById("staticBlockView14").textContent = ApplicationCenter14.applicationName14 +
    " | " + staticBlockMessage14;



// PHASE 15 - OBJECT PROPERTY DESCRIPTORS

// 1. PROPERTY DESCRIPTOR

const profileData15 = {
    // This is a normal object property.
    userName15: "Aadil"
};


// A property descriptor contains rules for a property.
// Important descriptor fields are:
// value -> stores the property value.
// writable -> controls value modification.
// enumerable -> controls property visibility in enumeration.
// configurable -> controls deletion and descriptor changes.

const basicDescriptor15 = {
    value: profileData15.userName15,
    writable: true,
    enumerable: true,
    configurable: true
};


// Show the basic descriptor idea.
document.getElementById("descriptorBasicView15").textContent = "value: " + basicDescriptor15.value + " | writable: " +
    basicDescriptor15.writable + " | enumerable: " + basicDescriptor15.enumerable + " | configurable: " + basicDescriptor15.configurable;

// 2. Object.getOwnPropertyDescriptor()

const accountData15 = {

    // Normal object property.
    balance15: 5000
};


// Get the descriptor of balance15. This method returns information about the property.
const balanceDescriptor15 = Object.getOwnPropertyDescriptor( accountData15, "balance15");

// Show descriptor information.
document.getElementById("descriptorInspectView15").textContent = "Value: " + balanceDescriptor15.value + " | Writable: " +
    balanceDescriptor15.writable + " | Enumerable: " +
    balanceDescriptor15.enumerable + " | Configurable: " + balanceDescriptor15.configurable;


// 3. Object.defineProperty()

const productData15 = {};


// defineProperty() creates or changes one property.
// Here we create the price15 property.
Object.defineProperty(productData15, "price15",
    {
        // Set the property value.
        value: 500,

        // Allow the value to be changed.
        writable: true,

        // Show the property in Object.keys().
        enumerable: true,

        // Allow descriptor changes.
        configurable: true
    }
);


// Change the property value.
productData15.price15 = 700;

// Show the result.
document.getElementById("descriptorDefineView15").textContent = "Price after defineProperty(): " + productData15.price15;

// 4. writable

const writableData15 = {};


// Create a property with writable true.
Object.defineProperty( writableData15, "score15",
    {
        // Initial value.
        value: 50,

        // true means value can be changed.
        writable: true,

        // Allow enumeration.
        enumerable: true,

        // Allow configuration.
        configurable: true
    }
);


// Change the value because writable is true.
writableData15.score15 = 90;


// Create another property.
Object.defineProperty( writableData15, "fixedScore15",
    {
        // Initial value.
        value: 100,

        // false means value cannot normally be changed.
        writable: false,

        // Allow enumeration.
        enumerable: true,

        // Allow configuration.
        configurable: true
    }
);


// Try to change the fixed value.
// In a normal non-strict script this assignment is ignored.
writableData15.fixedScore15 = 200;


// Show both values.
document.getElementById("descriptorWritableView15").textContent ="Writable value: " + writableData15.score15 +
    " | Fixed value: " + writableData15.fixedScore15;


// 5. enumerable

const enumerationData15 = {};

// Create a visible property.
Object.defineProperty( enumerationData15, "visibleName15",
    {
        // Property value.
        value: "Aadil",

        // Value can be changed.
        writable: true,

        // true means Object.keys() can see it.
        enumerable: true,

        // Descriptor can be changed.
        configurable: true
    }
);


// Create a non-enumerable property.
Object.defineProperty( enumerationData15, "hiddenCode15",
    {
        // Property value.
        value: "XYZ123",

        // Value can be changed.
        writable: true,

        // false hides it from Object.keys().
        enumerable: false,

        // Descriptor can be changed.
        configurable: true
    }
);


// Object.keys() returns only enumerable properties.
const visibleKeys15 = Object.keys(enumerationData15);


// Direct access can still work for hiddenCode15.
const hiddenCodeValue15 = enumerationData15.hiddenCode15;


// Show the result.
document.getElementById("descriptorEnumerableView15").textContent = "Object.keys(): " + visibleKeys15.join(", ") +
    " | Direct hidden value: " + hiddenCodeValue15;


// 6. configurable
const configurationData15 = {};


// Create a configurable property.
Object.defineProperty( configurationData15, "temporaryId15",
    {
        // Property value.
        value: 101,

        // Value can be changed.
        writable: true,

        // Property can appear in enumeration.
        enumerable: true,

        // true allows deletion and descriptor changes.
        configurable: true
    }
);

// Delete the property because configurable is true.
delete configurationData15.temporaryId15;


// Check whether the property still exists.
const configurableResult15 =
    "temporaryId15" in configurationData15;


// Create a non-configurable property.
Object.defineProperty( configurationData15, "permanentId15",
    {
        // Property value.
        value: 202,

        // Value can be changed.
        writable: true,

        // Show during enumeration.
        enumerable: true,

        // false prevents normal deletion.
        configurable: false
    }
);


// Check the descriptor.
const permanentDescriptor15 =Object.getOwnPropertyDescriptor( configurationData15,"permanentId15" );


// Show the result.
document.getElementById("descriptorConfigurableView15").textContent = "temporaryId exists: " +configurableResult15 +
    " | permanentId configurable: " + permanentDescriptor15.configurable;

// 7. GETTER DESCRIPTOR

const personData15 = {

    // Store first name internally.
    firstName15: "Aadil",

    // Store last name internally.
    lastName15: "Nezam"
};


// Create a getter descriptor.
Object.defineProperty(personData15, "fullName15",
    {

        // Getter runs when fullName15 is read.
        get() {

            // Return combined name.
            return (
                personData15.firstName15 + " " +personData15.lastName15 );
        },

        // Make the property visible to Object.keys().
        enumerable: true,

        // Allow descriptor configuration.
        configurable: true
    }
);


// Access getter like a property.
// We do NOT use parentheses.
const getterName15 = personData15.fullName15;


// Show the result.
document.getElementById("descriptorGetterView15").textContent ="Getter result: " + getterName15;


// 8. SETTER DESCRIPTOR

const profileSettings15 = {

    // This property stores the actual age.
    currentAge15: 20
};


// Create a setter descriptor.
Object.defineProperty( profileSettings15, "age15",
    {

        // Setter runs when age15 receives a new value.
        set(newAge15) {

            // Validate the new age.
            if (newAge15 >= 18) {

                // Save the valid age.
                profileSettings15.currentAge15 = newAge15;

            } else {

                // Keep the old value if age is invalid.
                profileSettings15.currentAge15 = profileSettings15.currentAge15;
            }
        },

        // Make the property visible.
        enumerable: true,

        // Allow configuration.
        configurable: true
    }
);


// Assign a new value.
// This automatically calls the setter.
profileSettings15.age15 = 25;


// Show the stored value.
document.getElementById("descriptorSetterView15").textContent = "Age after setter: " + profileSettings15.currentAge15;


// 9. Object.defineProperties()

const employeeData15 = {};

// defineProperties() creates multiple properties at once.
Object.defineProperties( employeeData15,
    {
        employeeName15: {
            // Property value.
            value: "Aadil",

            // Allow value changes.
            writable: true,

            // Show in Object.keys().
            enumerable: true,

            // Allow configuration.
            configurable: true
        },

        employeeRole15: {

            // Property value.
            value: "Developer",

            // Allow value changes.
            writable: true,

            // Show in Object.keys().
            enumerable: true,

            // Allow configuration.
            configurable: true
        },

        employeeId15: {

            // Property value.
            value: 501,

            // Do not allow value changes.
            writable: false,

            // Show in Object.keys().
            enumerable: true,

            // Allow configuration.
            configurable: true
        }
    }
);


// Read the multiple properties.
const employeeNameValue15 = employeeData15.employeeName15;

const employeeRoleValue15 = employeeData15.employeeRole15;

const employeeIdValue15 = employeeData15.employeeId15;


// Show the result.
document.getElementById("descriptorMultipleView15").textContent = "Name: " + employeeNameValue15 +
    " | Role: " + employeeRoleValue15 + " | ID: " + employeeIdValue15;



// PHASE 16 - OBJECT CONTROL METHODS

// 1. Object.freeze()

const frozenProduct16 = {

    // Create an existing property.
    productName16: "Laptop",

    // Create another existing property.
    productPrice16: 50000
};


// Object.freeze() completely locks the object.
// After freezing:
// 1. New properties cannot be added.
// 2. Existing properties cannot be deleted.
// 3. Existing property values cannot be changed.
// 4. Property descriptors cannot normally be changed.
Object.freeze(frozenProduct16);


// in a normal non-strict script.
frozenProduct16.productPrice16 = 60000;

frozenProduct16.productBrand16 = "Dell"; // no add new properties

delete frozenProduct16.productName16;  // no delet properties


// Show the final values.
document.getElementById("freezeResult16").textContent ="Name: " + frozenProduct16.productName16 +
    " | Price: " + frozenProduct16.productPrice16 +" | New property: " + frozenProduct16.productBrand16;

// 2. Object.seal()

const sealedProfile16 = {

    // Existing property.
    profileName16: "Aadil",

    // Another existing property.
    profileCity16: "Ara"
};


// Object.seal() seals the object.
// After sealing:
// 1. New properties cannot be added.
// 2. Existing properties cannot be deleted.
// 3. Existing writable values can still be changed.
Object.seal(sealedProfile16);

// Change an existing property.
// This is allowed because seal does not make
// writable properties read-only.
sealedProfile16.profileCity16 = "Patna";

sealedProfile16.profileAge16 = 22;   // Try to add a new property. This is not allowed 

delete sealedProfile16.profileName16; // This is not allowed because the object is sealed.


// Show the result.
document.getElementById("sealResult16").textContent = "Name: " + sealedProfile16.profileName16 + " | City: " +
    sealedProfile16.profileCity16 + " | New property: " + sealedProfile16.profileAge16;

// 3. Object.preventExtensions()

const extensionData16 = {
    // Existing property.
    userRole16: "Developer",

    // Another existing property.
    userLevel16: "Junior"
};


// preventExtensions() prevents new properties.
Object.preventExtensions(extensionData16);

extensionData16.userSkill16 = "JavaScript"; // Try to add a new property. This is not allowed.

extensionData16.userLevel16 = "Senior"; // Existing property can still be updated.

delete extensionData16.userRole16; // Existing property can still be deleted.


// Show the result.
document.getElementById("preventExtensionResult16").textContent = "Role: " + extensionData16.userRole16 +
    " | Level: " + extensionData16.userLevel16 + " | New Skill: " + extensionData16.userSkill16;


// 4. Object.isFrozen()

const frozenCheckData16 = {
    // Create a property before freezing.
    accountType16: "Premium"
};

// Freeze the object.
Object.freeze(frozenCheckData16);


// Object.isFrozen() checks whether the object is frozen or not.
const frozenStatus16 =Object.isFrozen(frozenCheckData16);


// The result is true because the object was frozen.
document.getElementById("frozenCheckResult16").textContent = "Is object frozen? " + frozenStatus16;

// 5. Object.isSealed()

const sealedCheckData16 = {
    // Create a property before sealing.
    memberName16: "Aadil"
};


// Seal the object.
Object.seal(sealedCheckData16);

// Object.isSealed() checks whether
// the object is sealed or not.
const sealedStatus16 = Object.isSealed(sealedCheckData16);


// The result is true because the object was sealed.
document.getElementById("sealedCheckResult16").textContent = "Is object sealed? " +sealedStatus16;

// 6. Object.isExtensible()

const extensibleCheckData16 = {

    // Create a normal property.
    status16: "Active"
};


// A normal object is extensible.
// That means new properties can be added.
const beforePreventStatus16 = Object.isExtensible(extensibleCheckData16);


// Prevent new properties.
Object.preventExtensions(extensibleCheckData16);


// Check again.
// Now the result becomes false.
const afterPreventStatus16 = Object.isExtensible(extensibleCheckData16);


// Show both results.
document.getElementById("extensibleCheckResult16").textContent = "Before preventExtensions(): " +
beforePreventStatus16 + " | After preventExtensions(): " + afterPreventStatus16;

// PHASE 17 - OBJECT COPYING

// REFERENCE VS VALUE

// Primitive values are copied by VALUE.

let numberValue17 = 50; // numberValue17 stores the value 50.

let numberCopy17 = numberValue17;    // numberCopy17 gets a separate copy of 50.

numberCopy17 = 100; // Changing numberCopy17 does NOT change numberValue17.


// Objects work differently.
let referenceObject17 = {       // referenceObject17 stores an object.
    name: "Aadil",
    age: 22
};

// referenceCopy17 does not create a new object.

// It stores the REFERENCE of the same object.
let referenceCopy17 = referenceObject17;

// Changing through referenceCopy17 also changes referenceObject17.
referenceCopy17.age = 25;


// Display result.
document.getElementById("referenceValueView17").innerHTML = "Primitive: numberValue17 = " + numberValue17 +
    "<br>Primitive Copy: numberCopy17 = " + numberCopy17 +
    "<br><br>Object: referenceObject17.age = " + referenceObject17.age +
    "<br>Object Copy: referenceCopy17.age = " + referenceCopy17.age;


// IMPORTANT:
// Primitive:-  value -> 50   copy  -> 50
// Object:-  object variable -> reference   another variable -> same reference

// Therefore:
// numberCopy17 = numberValue17 creates a separate primitive value.
// referenceCopy17 = referenceObject17  points to the same object.



// SHALLOW COPY

// Shallow copy creates a NEW outer object.
// But nested objects are still shared.

let shallowSource17 = {
    title: "JavaScript",
    details: {
        level: "Beginner"
    }
};

// Spread creates a new outer object.
let shallowClone17 = {
    ...shallowSource17
};


shallowClone17.title = "Advanced"; // Changing a top-level property affects only the copy.
// But details is a nested object.

shallowClone17.details.level = "Intermediate"; // Both objects still point to the same nested object.


// Display result.
document.getElementById("shallowCopyView17").innerHTML = "Original title: " + shallowSource17.title +
    "<br>Copied title: " + shallowClone17.title + "<br><br>Original nested level: " +
    shallowSource17.details.level + "<br>Copied nested level: " + shallowClone17.details.level;


// Top-level property -> copied
// Nested object -> shared



//  DEEP COPY
// Deep copy creates a completely independent copy.
// Nested objects are also copied.

let deepSource17 = {
    course: "Full Stack",
    info: {
        duration: "6 Months",
        mode: "Online"
    }
};

// structuredClone() creates a deep copy.
let deepClone17 = structuredClone(deepSource17);

// Change nested property in copied object.
deepClone17.info.mode = "Offline";


// Original object remains unchanged.
document.getElementById("deepCopyView17").innerHTML = "Original mode: " + deepSource17.info.mode +
    "<br>Copied mode: " + deepClone17.info.mode;



// deepSource17.info and deepClone17.info are different objects.



// Object.assign()

// Object.assign() can copy properties from one object to another.

// Create source object.
let assignSource17 = {
    product: "Laptop",
    price: 50000
};

// Create empty target object.
let assignTarget17 = {};

// Copy properties from source to target.
Object.assign(assignTarget17, assignSource17);

// Change copied object.
assignTarget17.price = 55000;


// Display result.
document.getElementById("assignCopyView17").innerHTML = "Source price: " + assignSource17.price +
    "<br>Target price: " + assignTarget17.price;


// Object.assign() creates a new outer object when target is an empty object.
// But remember: Object.assign() performs SHALLOW COPY. Nested objects are still shared.


// SPREAD OPERATOR

// Spread operator (...) is another common
// way to make a shallow copy.

// Original object.
let spreadSource17 = {
    name: "Laptop",
    brand: "Dell",
    specs: {
        ram: "16GB"
    }
};

// Copy object using spread.
let spreadClone17 = {
    ...spreadSource17
};

// Change top-level property.
spreadClone17.brand = "HP";

// Change nested property.
spreadClone17.specs.ram = "32GB";


// Display result.
document.getElementById("spreadCopyView17").innerHTML = "Original brand: " + spreadSource17.brand +
    "<br>Copied brand: " + spreadClone17.brand + "<br><br>Original RAM: " + spreadSource17.specs.ram +
    "<br>Copied RAM: " + spreadClone17.specs.ram;



//structuredClone()

// structuredClone() is used for DEEP COPYING
// many types of JavaScript values.

// Original object.
let cloneSource17 = {
    user: "Aadil",
    address: {
        city: "Ara",
        state: "Bihar"
    }
};

// Create deep copy.
let cloneResult17 = structuredClone(cloneSource17);

// Change nested city in copied object.
cloneResult17.address.city = "Patna";


// Original city remains unchanged.
document.getElementById("structuredCloneView17").innerHTML = "Original city: " + cloneSource17.address.city +
    "<br>Copied city: " + cloneResult17.address.city;



// DEEP COPY LIMITATIONS

// Deep copy does NOT mean that every JavaScript value can be copied perfectly in every method.

// structuredClone() supports many built-in types, but it cannot clone everything.

// Example:- Function cannot be cloned using structuredClone().

let deepLimitSource17 = {
    username: "Aadil",

    // Function is present inside the object.
    sayHello: function () {
        return "Hello";
    }
};


// Trying to clone an object containing a function with structuredClone() throws DataCloneError.

// We will use try/catch so the program does not stop.
try {

    let deepLimitClone17 = structuredClone(deepLimitSource17);

    document.getElementById("deepLimitView17").innerHTML = "Clone successful.";

} catch (deepLimitError17) {

    document.getElementById("deepLimitView17").innerHTML =
        "structuredClone() cannot clone this object because it contains a function.";
}


// Important:- // structuredClone() is powerful, but it is not a universal solution for every value.

// JSON.parse(JSON.stringify(obj))     is NOT a perfect deep-copy solution.

// It can lose or change some values such as: undefined , functions , Symbol ,Date behavior ,special object types

// Therefore choose the copying method according to the data you are working with.



// OBJECT REFERENCES

// An object variable contains a REFERENCE to an object in memory.

let sharedObject17 = {
    balance: 1000
};

// Both variables point to the same object.
let firstHolder17 = sharedObject17;
let secondHolder17 = sharedObject17;

// Change using firstHolder17.
firstHolder17.balance = 5000;


// secondHolder17 also sees 5000
// because both variables refer to the same object.

document.getElementById("objectReferenceView17").innerHTML =
    "Original balance: " + sharedObject17.balance +
    "<br>First holder balance: " + firstHolder17.balance +
    "<br>Second holder balance: " + secondHolder17.balance;



// PHASE 18 - IMPORTANT OBJECT METHODS

// 181. Object.keys() Object.keys() returns an array
// containing the own enumerable property names.

// Create an object.
let keysBook18 = {
    title: "JavaScript",
    author: "Aadil",
    pages: 300
};

let bookKeys18 = Object.keys(keysBook18);  // Get all property names.  o/p ["title", "author", "pages"]

document.getElementById("keysOutput18").innerHTML = "Keys: " + bookKeys18.join(", ");

// 182. Object.values()

// Object.values() returns an array  containing the object's own enumerable values.

let valuesBook18 = {
    title: "React",
    author: "Aadil",
    pages: 250
};


// Get all values.
let bookValues18 = Object.values(valuesBook18);  // ["React", "Aadil", 250]

document.getElementById("valuesOutput18").innerHTML = "Values: " + bookValues18.join(", ");

// 183. Object.entries()
// Object.entries() returns an array of key-value pairs.

let entriesBook18 = {
    title: "Node.js",
    level: "Intermediate",
    duration: "3 Months"
};


// Get key-value pairs.
let bookEntries18 = Object.entries(entriesBook18);
// [
//     ["title", "Node.js"],
//     ["level", "Intermediate"],
//     ["duration", "3 Months"]
// ]

document.getElementById("entriesOutput18").innerHTML = "Entries: " + JSON.stringify(bookEntries18);
// entries() is useful when we want both key and value together.


// 184. Object.fromEntries()
// Object.fromEntries() does the opposite of Object.entries().
// It converts key-value pairs into an object.

let entryList18 = [

    ["name", "Aadil"],

    ["course", "MCA"],

    ["city", "Ara"]
];


// Convert entries into object.
let convertedProfile18 = Object.fromEntries(entryList18);


// Result:
//
// {
//     name: "Aadil",
//     course: "MCA",
//     city: "Ara"
// }

document.getElementById("fromEntriesOutput18").innerHTML =

    "Name: " + convertedProfile18.name +
    "<br>Course: " + convertedProfile18.course +
    "<br>City: " + convertedProfile18.city;


// 185. Object.assign()

// Object.assign() copies properties from source objects into a target object.

let assignTarget18 = {

    name: "Aadil"
};


// Create source object.
let assignSource18 = {

    course: "MCA",

    city: "Ara"
};


// Copy source properties into target.
Object.assign(assignTarget18, assignSource18);



document.getElementById("assignOutput18").innerHTML =
    "Name: " + assignTarget18.name +
    "<br>Course: " + assignTarget18.course +
    "<br>City: " + assignTarget18.city;


// IMPORTANT:
// Object.assign() performs SHALLOW copying.
// Nested objects are not deeply cloned.



// 186. Object.hasOwn()

// Object.hasOwn() checks whether  an object directly owns a property.

let ownershipProfile18 = {

    username: "Aadil",

    city: "Ara"
};


// Check existing own property.
let ownNameCheck18 = Object.hasOwn( ownershipProfile18,"username");

// Check missing property.
let ownAgeCheck18 = Object.hasOwn( ownershipProfile18,"age" );


document.getElementById("hasOwnOutput18").innerHTML =

    "Own username: " + ownNameCheck18 +
    "<br>Own age: " + ownAgeCheck18;



// 187. Object.is()

// Object.is() checks whether two values are the same according to Object.is rules.

// Compare numbers.
let sameNumberCheck18 = Object.is(25, 25);


// Compare different numbers.
let differentNumberCheck18 = Object.is(25, 30);


// Compare strings.
let sameTextCheck18 = Object.is( "MCA", "MCA");


// Display results.
document.getElementById("isOutput18").innerHTML =

    "25 and 25: " + sameNumberCheck18 +
    "<br>25 and 30: " + differentNumberCheck18 +
    "<br>MCA and MCA: " + sameTextCheck18;


// Object.is() is similar to ===
// but there are some important differences.
// Object.is(NaN, NaN)
// -> true
// NaN === NaN
// -> false
// Also:
// Object.is(0, -0)
// -> false
// 0 === -0
// -> true



// 188. Object.create()

// Object.create() creates a new object with the given object as its prototype.

// Create prototype object.
let creatorPrototype18 = {

    introduce18: function () {

        return "Hello " + this.name;

    }

};

// Create new object using prototype.
let createdMember18 = Object.create(creatorPrototype18);

// Add own property.
createdMember18.name = "Aadil";

// Call inherited method.
let createdMessage18 = createdMember18.introduce18();


document.getElementById("createOutput18").innerHTML = createdMessage18;


// 189. Object.getPrototypeOf()

// Object.getPrototypeOf() returns the prototype of an object.

// Create prototype.
let prototypeSource18 = {

    greet18: function () {

        return "Hello";

    }

};


// Create object using prototype.
let prototypeChild18 = Object.create(prototypeSource18);


// Get prototype.
let detectedPrototype18 =Object.getPrototypeOf(prototypeChild18);


// Check whether returned prototype is the same as prototypeSource18.
let prototypeMatch18 = detectedPrototype18 === prototypeSource18;


document.getElementById("getPrototypeOutput18").innerHTML =

    "Prototype match: " + prototypeMatch18;


// Prototype match: true



// 190. Object.setPrototypeOf()

// Object.setPrototypeOf() changes the prototype of an existing object.

// First prototype.
let firstPrototype18 = {

    message18: function () {

        return "Message from first prototype";

    }

};


// Second prototype.
let secondPrototype18 = {

    message18: function () {

        return "Message from second prototype";

    }

};


// Create object using first prototype.
let prototypeSwitchObject18 = Object.create( firstPrototype18);


// Change prototype.
Object.setPrototypeOf( prototypeSwitchObject18,secondPrototype18);


// Now object gets method from second prototype.
let switchedMessage18 = prototypeSwitchObject18.message18();

document.getElementById("setPrototypeOutput18").innerHTML = switchedMessage18;



// PHASE 19 - SYMBOLS IN OOPs
// 191. WHAT IS SYMBOL? Symbol is a primitive data type in JavaScript.
// It is mainly used to create unique identifiers.

// Create a Symbol.
let symbolToken19 = Symbol("userId");

// The text inside Symbol() is only a description. It is not the actual value of the Symbol.


// Check the type.
let symbolType19 = typeof symbolToken19;


document.getElementById("symbolBasicOutput19").innerHTML = "Type of symbolToken19: " + symbolType19;

// Type of symbolToken19: symbol

// Important:
// Symbol is a primitive type.
// JavaScript primitive types include:
// String
// Number
// BigInt
// Boolean
// Undefined
// Null
// Symbol



// 192. SYMBOL AS OBJECT PROPERTY A Symbol can be used as an object property key.

// Create a Symbol key.
let propertyKey19 = Symbol("secretKey");


// Create object.
let symbolProfile19 = {

    name: "Aadil",

    age: 22
};


// Add a property using Symbol.
symbolProfile19[propertyKey19] = "User-786";


// Access Symbol property.
let symbolPropertyValue19 = symbolProfile19[propertyKey19];


document.getElementById("symbolPropertyOutput19").innerHTML =

    "Normal property: " + symbolProfile19.name +
    "<br>Symbol property: " + symbolPropertyValue19;


// IMPORTANT:
// Symbol property:
// object[symbol]
// Example:
// symbolProfile19[propertyKey19]


// Symbol properties do not appear in normal Object.keys().

let normalKeys19 = Object.keys(symbolProfile19);


// Symbol properties can be found using Object.getOwnPropertySymbols().

let symbolKeys19 = Object.getOwnPropertySymbols(symbolProfile19);


document.getElementById("symbolPropertyOutput19").innerHTML +=

    "<br>Normal keys count: " + normalKeys19.length +
    "<br>Symbol keys count: " + symbolKeys19.length;



// 193. UNIQUE SYMBOL

// Every Symbol() call creates a unique Symbol.  Create two Symbols with same description.
let uniqueTokenA19 = Symbol("id");

let uniqueTokenB19 = Symbol("id");


// Compare them.
let uniqueCheck19 = uniqueTokenA19 === uniqueTokenB19;


document.getElementById("uniqueSymbolOutput19").innerHTML = "Are both Symbols same? " + uniqueCheck19;

// false


// Even though both descriptions are "id",
// the Symbols are different.

// Symbol("id") !== Symbol("id")


// 194. WELL-KNOWN SYMBOLS

// JavaScript provides some predefined Symbols.

// These are called WELL-KNOWN SYMBOLS.

// Some important examples:
// Symbol.iterator
// Symbol.toPrimitive
// Symbol.toStringTag
// There are more well-known Symbols,
// but these three are important for this phase.


// Check their type.
let iteratorType19 = typeof Symbol.iterator;

let primitiveType19 = typeof Symbol.toPrimitive;

let tagType19 = typeof Symbol.toStringTag;


// Display result.
document.getElementById("wellKnownOutput19").innerHTML =

    "Symbol.iterator type: " + iteratorType19 +
    "<br>Symbol.toPrimitive type: " + primitiveType19 +
    "<br>Symbol.toStringTag type: " + tagType19;


// These Symbols allow us to customize
// built-in JavaScript behavior.



// 195. Symbol.iterator

// Symbol.iterator allows an object to define how it should be iterated.

// Create custom object.
let iterableBox19 = {

    items: ["HTML", "CSS", "JavaScript"],


    // Define custom iterator.
    [Symbol.iterator]: function* () {

        // Return each item one by one.
        yield this.items[0];

        yield this.items[1];

        yield this.items[2];

    }

};


// for...of automatically looks for
// Symbol.iterator.

let iteratorResult19 = "";


// Iterate through object.
for (let topicItem19 of iterableBox19) {

    iteratorResult19 += topicItem19 + "<br>";

}


// Display result.
document.getElementById("iteratorOutput19").innerHTML = iteratorResult19;


// IMPORTANT:
// Symbol.iterator tells JavaScript:  "How should this object be iterated?"


// 196. Symbol.toPrimitive

// Symbol.toPrimitive allows an object to control how it converts into
// primitive values.

// Create object.
let primitiveObject19 = {

    amount: 500,


    // Define custom primitive conversion.
    [Symbol.toPrimitive]: function (hint) {

        // hint tells us what kind of conversion
        // JavaScript is trying to perform.

        if (hint === "number") {

            return this.amount;

        }


        if (hint === "string") {

            return "Amount: " + this.amount;

        }


        // "default" conversion.
        return this.amount;

    }

};


// Number conversion.
let numberResult19 = Number(primitiveObject19);


// String conversion.
let stringResult19 = String(primitiveObject19);


// Display result.
document.getElementById("primitiveOutput19").innerHTML =

    "Number conversion: " + numberResult19 +
    "<br>String conversion: " + stringResult19;


// IMPORTANT:
//
// Symbol.toPrimitive lets us control
// object -> primitive conversion.
//
// Possible hints:
//
// "number"
// "string"
// "default"


// 197. Symbol.toStringTag

// Symbol.toStringTag allows us to customize the result of Object.prototype.toString().

// Create object.
let tagObject19 = {

    [Symbol.toStringTag]: "StudentRecord"

};


// Get object type string.
let tagResult19 = Object.prototype.toString.call(tagObject19);


// Display result.
document.getElementById("stringTagOutput19").innerHTML = tagResult19;

// Object.prototype.toString.call(object)
// might return:
// [object Object]

// But Symbol.toStringTag lets us customize it.
// Result:
// [object StudentRecord]



// PHASE 20 - ADVANCED CLASS CONCEPTS

// 198. CLASS FIELDS

// A class field is a variable/property declared directly inside a class.
// We can declare a field without usingthe constructor.

// Create class.
class CourseBox20 {

    // This is a class field.
    courseName20 = "JavaScript";

    // Another class field.
    courseLevel20 = "Advanced";


    // Normal class method.
    showCourse20() {

        return this.courseName20 +" - " + this.courseLevel20;

    }

}


// Create object.
let courseBoxItem20 = new CourseBox20();

// Access class fields.
document.getElementById("classFieldsOutput20").innerHTML =

    "Course: " + courseBoxItem20.courseName20 +
    "<br>Level: " + courseBoxItem20.courseLevel20 +
    "<br>Info: " + courseBoxItem20.showCourse20();



// 199. PUBLIC FIELDS

// Public fields can be accessed from outside the class.

// Create class.
class PublicDevice20 {

    // This field is public.
    deviceName20 = "Laptop";

    // This field is also public.
    deviceBrand20 = "Lenovo";

}


// Create object.
let publicDeviceItem20 = new PublicDevice20();


// Public field can be accessed directly.
let publicDeviceName20 =  publicDeviceItem20.deviceName20;

// Public field can also be changed.
publicDeviceItem20.deviceName20 = "Desktop";

document.getElementById("publicFieldsOutput20").innerHTML =

    "Original brand: " +publicDeviceItem20.deviceBrand20 +

    "<br>Updated device: " + publicDeviceItem20.deviceName20;


// 200. PRIVATE FIELDS

// Private fields start with #. They can only be accessed inside the class.

// Create class.
class PrivateWallet20 {

    // Private field.
    #money20 = 5000;

    // Public method.
    showMoney20() {

        return this.#money20;

    }

}


// Create object.
let privateWalletItem20 = new PrivateWallet20();



document.getElementById("privateFieldsOutput20").innerHTML =

    "Private money: " + privateWalletItem20.showMoney20();


// 201. PRIVATE METHODS

// A private method also starts with #. It can only be called from inside the same class.

class PrivateService20 {

    // Private method.
    #checkService20() {

        return "Service checked";

    }

    // Public method.
    startService20() {

        // Private method is called internally.
        return this.#checkService20();

    }

}


// Create object.
let privateServiceItem20 = new PrivateService20();


// Public method can be called.
document.getElementById("privateMethodsOutput20").innerHTML = privateServiceItem20.startService20();

// We cannot directly call: privateServiceItem20.#checkService20() because the method is private.


// 202. STATIC FIELDS

// Static field belongs to the CLASS, not to individual objects.

// Create class.
class AppConfig20 {

    // Static field.
    static appName20 = "My App";

    // Another static field.
    static appVersion20 = "2.0";

}


// Access static fields using CLASS name.
let appNameValue20 = AppConfig20.appName20;

let appVersionValue20 = AppConfig20.appVersion20;


document.getElementById("staticFieldsOutput20").innerHTML =

    "App: " + appNameValue20 + "<br>Version: " + appVersionValue20;


    // 203. STATIC PRIVATE FIELDS


class SecureConfig20 {

    // Static private field.
    static #secretKey20 = "SEC-2026";


    // Public static method.
    static showSecret20() {

        return this.#secretKey20;

    }

}


// We cannot access #secretKey20 directly.
// SecureConfig20.#secretKey20 would cause an error.


// We use a public static method.
let secureKeyValue20 = SecureConfig20.showSecret20();


document.getElementById("staticPrivateFieldsOutput20").innerHTML =

    "Static private value: " + secureKeyValue20;


// 204. STATIC PRIVATE METHODS

// A static private method belongs to the class and is private.

// Create class.
class AccessControl20 {

    // Private static method.
    static #generateCode20() {

        return "ACCESS-OK";

    }


    // Public static method.
    static verifyAccess20() {

        // Call private static method.
        return this.#generateCode20();

    }

}


// Call public static method.
let accessResult20 = AccessControl20.verifyAccess20();


document.getElementById("staticPrivateMethodsOutput20").innerHTML = accessResult20;


// 205. COMPUTED CLASS FIELDS

// Computed property names use [ ]. The property name comes from an expression.
// Create a variable containing the field name.
const computedFieldName20 = "userRole20";


class DynamicUser20 {

    // Computed class field.
    [computedFieldName20] = "Developer";

}


// Create object.
let dynamicUserItem20 = new DynamicUser20();


// Access computed field.
let dynamicRole20 = dynamicUserItem20.userRole20;

document.getElementById("computedFieldsOutput20").innerHTML = "Computed field value: " + dynamicRole20;

// IMPORTANT:
// Instead of writing:
// userRole20 = "Developer";
// we created the property name dynamically:
// [computedFieldName20] = "Developer";



// 206. CLASS FIELD INITIALIZATION

// Class fields are initialized when an object is created.

// Create class.
class StudentProfile20 {

    // Field gets its initial value.
    studentName20 = "Aadil";

    studentCourse20 = "MCA";


    // Constructor can change the field.
    constructor(profileName20) {

        // Update the field using constructor value.
        this.studentName20 = profileName20;

    }


    showProfile20() {

        return this.studentName20 + " - " + this.studentCourse20;

    }

}

// Create object.
let studentProfileItem20 = new StudentProfile20("Rahul");


document.getElementById("fieldInitializationOutput20").innerHTML = studentProfileItem20.showProfile20();


// What happens?
// Step 1:
// Class fields are initialized.

// studentName20 = "Aadil"
// studentCourse20 = "MCA"

// Step 2:
// Constructor runs.

// this.studentName20 = profileName20

// Step 3:
// studentName20 becomes "Rahul".



// 207. STATIC INITIALIZATION BLOCK

// A static initialization block
// uses:
// static {
// }
// It runs once when the class is initialized.

// Create class.
class SystemSetup20 {

    // Static field.
    static systemName20 = "Learning System";

    // Static field that will be set
    // inside the static block.
    static statusText20;


    // Static initialization block.
    static {

        // This code runs once  during class initialization.
        this.statusText20 = "System Ready";

    }

}


// Access static fields.
let systemNameValue20 = SystemSetup20.systemName20;

let systemStatusValue20 = SystemSetup20.statusText20;


document.getElementById("staticBlockOutput20").innerHTML =
    "System: " + systemNameValue20 + "<br>Status: " + systemStatusValue20;




// static {}

// runs automatically when the class  is initialized. It is not called like a normal method. It is useful for complex static setup.


// PHASE 21 - MIXINS

// 208. WHAT IS MIXIN?

// A Mixin is a reusable group of methods that can be added to another object or class.
// A Mixin is NOT normally used as a standalone object. Its main purpose is to provide reusable behavior.


// Create a Mixin object.
const speakerMixin21 = {

    speak21() {

        return "Speaking...";

    }

};

// Create another object.
const personUnit21 = {

    name21: "Aadil"

};

Object.assign( personUnit21, speakerMixin21 ); // Add Mixin behavior to the object.

// Now personUnit21 has speak21().
let mixinBasicResult21 =personUnit21.speak21();


document.getElementById("mixinBasicOutput21").innerHTML =
                "Name: " + personUnit21.name21 + "<br>Mixin behavior: " + mixinBasicResult21;


// Mixin gives reusable behavior  to another object.
// Mixin
// Reusable behavior Object gets that behavior

// 209. WHY MIXINS?

// Mixins help us REUSE behavior without creating a strict parent-child hierarchy.

// Create reusable logging behavior.
const loggerMixin21 = {

    log21(message21) {

        return "LOG: " + message21;

    }

};

// Create another object.
const serviceUnit21 = {

    serviceName21: "Payment Service"

};


// Add logging behavior.
Object.assign( serviceUnit21, loggerMixin21 );


// Use the added behavior.
let mixinWhyResult21 =serviceUnit21.log21("Payment started");

document.getElementById("mixinWhyOutput21").innerHTML =

    serviceUnit21.serviceName21 + "<br>" + mixinWhyResult21;

// Why use Mixins? 1. Reuse behavior 2. Avoid unnecessary inheritance 3. Combine different behaviors 4. Keep code modular

// 210. MIXIN USING Object.assign()

// Object.assign() can copy methods from a Mixin object into another object.

// First Mixin.
const movementMixin21 = {

    move21() {

        return "Moving";

    }

};

// Second Mixin.
const alertMixin21 = {

    alert21() {

        return "Alert sent";

    }

};


// Create target object.
const robotUnit21 = {
    robotName21: "RX-1"

};


// Add both Mixins.
Object.assign(robotUnit21, movementMixin21, alertMixin21);


// Now robotUnit21 has both behaviors.

let movementResult21 = robotUnit21.move21();
let alertResult21 = robotUnit21.alert21();

document.getElementById("mixinAssignOutput21").innerHTML =
    "Robot: " + robotUnit21.robotName21 +
    "<br>" + movementResult21 +
    "<br>" + alertResult21;

// Object.assign(target, mixin1, mixin2)
// copies the properties/methods into the target object.



// 211. MIXIN WITH CLASSES

// Mixins can also be used with classes.

// Create a Mixin function.
const trackingMixin21 = (BaseClass21) => {

    // Return a new class extending BaseClass.
    return class extends BaseClass21 {

        track21() {

            return "Tracking enabled";

        }

    };

};


// Create another Mixin.
const timestampMixin21 = (BaseClass21) => {

    return class extends BaseClass21 {

        getTime21() {

            return "Time recorded";

        }

    };

};


// Base class.
class DeliveryUnit21 {

    deliver21() {

        return "Package delivered";

    }

}


// Add first Mixin.
const TrackedDelivery21 = trackingMixin21(DeliveryUnit21);

// Add second Mixin.
const CompleteDelivery21 = timestampMixin21(TrackedDelivery21);

// Create final object.
const deliveryUnitItem21 = new CompleteDelivery21();


// The object has:
// Base behavior  + tracking behavior  + timestamp behavior

document.getElementById("mixinClassOutput21").innerHTML =

    deliveryUnitItem21.deliver21() +
    "<br>" +
    deliveryUnitItem21.track21() +
    "<br>" +
    deliveryUnitItem21.getTime21();

// This is called Mixin with Classes.



// 212. MULTIPLE BEHAVIOR COMPOSITION

// Composition means building an object  by combining multiple independent behaviors.

// Mixin 1.
const cameraBehavior21 = {

    takePhoto21() {

        return "Photo captured";

    }

};


// Mixin 2.
const musicBehavior21 = {

    playMusic21() {

        return "Music playing";

    }

};


// Mixin 3.
const locationBehavior21 = {

    getLocation21() {

        return "Location found";

    }

};


// Create device object.
const smartDevice21 = {

    deviceName21: "Smart Phone"

};

// Combine three behaviors.
Object.assign( smartDevice21, cameraBehavior21, musicBehavior21, locationBehavior21);

// Use all behaviors.
let photoResult21 = smartDevice21.takePhoto21();

let musicResult21 = smartDevice21.playMusic21();

let locationResult21 =smartDevice21.getLocation21();

document.getElementById("multiBehaviorOutput21").innerHTML =

    "Device: " + smartDevice21.deviceName21 +
    "<br>" + photoResult21 +
    "<br>" + musicResult21 +
    "<br>" + locationResult21;

// One object now has multiple independent behaviors.




// 213. INHERITANCE VS COMPOSITION

// INHERITANCE:- "is-a" relationship.
// Dog IS an Animal.

// Composition:- "has-a" or "uses-a" relationship.
// Car HAS an Engine.


// INHERITANCE EXAMPLE

class AnimalModel21 {

    eat21() {

        return "Animal eats";

    }

}


class DogModel21 extends AnimalModel21 {

    bark21() {

        return "Dog barks";

    }

}

const dogModelItem21 = new DogModel21();

// Dog inherits from Animal.
let inheritanceResult21 = dogModelItem21.eat21();


// COMPOSITION EXAMPLE

const engineUnit21 = {

    startEngine21() {

        return "Engine started";

    }

};


const musicUnit21 = {

    playMusic21() {

        return "Music playing";

    }

};


// Car uses independent behaviors.
const carUnit21 = {

    drive21() {

        return "Car driving";

    }

};


// Add engine behavior.
Object.assign( carUnit21, engineUnit21, musicUnit21 );


let compositionResult21 = carUnit21.startEngine21();


document.getElementById( "inheritanceCompositionOutput21" ).innerHTML =

    "Inheritance: " + inheritanceResult21 + "<br>Composition: " + compositionResult21;


// Inheritance:
// Child extends Parent.

// Composition:
// Object is built using multiple behaviors.



// 214. COMPOSITION OVER INHERITANCE

// Composition over inheritance means:

// Prefer combining small independent behaviors
// when inheritance is not necessary.

// Create behavior 1.
const paymentBehavior21 = {

    pay21(amount21) {

        return "Paid ₹" + amount21;

    }

};


// Create behavior 2.
const notificationBehavior21 = {

    notify21() {

        return "Notification sent";

    }

};


// Create behavior 3.
const historyBehavior21 = {

    saveHistory21() {

        return "Payment history saved";

    }

};


// Create payment service.
const paymentServiceUnit21 = {

    serviceTitle21: "Payment Service"

};


// Compose the required behaviors.
Object.assign( paymentServiceUnit21, paymentBehavior21, notificationBehavior21, historyBehavior21);


// Use all behaviors.
let paymentResult21 = paymentServiceUnit21.pay21(500);

let notificationResult21 = paymentServiceUnit21.notify21();

let historyResult21 = paymentServiceUnit21.saveHistory21();


document.getElementById( "compositionOverInheritanceOutput21").innerHTML =

    paymentServiceUnit21.serviceTitle21 +
    "<br>" +
    paymentResult21 +
    "<br>" +
    notificationResult21 +
    "<br>" +
    historyResult21;


// Here we did not create:
//
// PaymentService extends Payment
//
// Instead we composed:
//
// Payment behavior
// + Notification behavior
// + History behavior
//
// This keeps behaviors independent.



// OOPs Design Concepts
// 1. COMPOSITION

class EnginePart22 {
    startEngine22() {
        return "Engine started";
    }
}

class CarUnit22 {
    constructor() {
        // Car creates and owns the engine
        this.engineUnit22 = new EnginePart22();
    }

    driveCar22() {
        return this.engineUnit22.startEngine22();
    }
}

const carUnit22 = new CarUnit22();

document.getElementById("compositionView22").textContent = "Composition: " + carUnit22.driveCar22();


// 2. AGGREGATION

class TeacherPerson22 {
    constructor(nameValue22) {
        this.teacherName22 = nameValue22;
    }
}

// Teachers can exist independently
const teacherAlpha22 = new TeacherPerson22("Rahul");
const teacherBeta22 = new TeacherPerson22("Amit");

const studentGroup22 = {
    teachers22: [teacherAlpha22, teacherBeta22]
};

document.getElementById("aggregationView22").textContent =
    "Aggregation: " + studentGroup22.teachers22
        .map(itemValue22 => itemValue22.teacherName22).join(", ");


// 3. ASSOCIATION

const doctorUnit22 = {
    doctorName22: "Dr. Khan"
};

const patientUnit22 = {
    patientName22: "Aman"
};

// Both objects exist independently
const associationResult22 = `${doctorUnit22.doctorName22} treats ${patientUnit22.patientName22}`;

document.getElementById("associationView22").textContent = "Association: " + associationResult22;

// 4. DEPENDENCY

class ReportService22 {
    generateReport22() {
        return "Report generated";
    }
}

class ReportApp22 {
    createReport22(serviceTool22) {
        // App temporarily depends on service
        return serviceTool22.generateReport22();
    }
}

const reportService22 = new ReportService22();
const reportApp22 = new ReportApp22();

const dependencyResult22 = reportApp22.createReport22(reportService22);

document.getElementById("dependencyView22").textContent = "Dependency: " + dependencyResult22;


// 5. COUPLING

class TightLogger22 {
    saveLog22(messageValue22) {
        return `Log saved: ${messageValue22}`;
    }
}

class TightService22 {
    constructor() {
        // Direct dependency creates tight coupling
        this.loggerTool22 = new TightLogger22();
    }

    runService22() {
        return this.loggerTool22.saveLog22("Service running");
    }
}

const tightService22 = new TightService22();

document.getElementById("couplingView22").textContent = "Coupling: " + tightService22.runService22();


// 6. COHESION

class OrderRepository22 {
    createOrderRecord22() {
        return "Order created";
    }

    updateOrderRecord22() {
        return "Order updated";
    }

    cancelOrderRecord22() {
        return "Order cancelled";
    }
}

const orderRepository22 = new OrderRepository22();

const cohesionResult22 = orderRepository22.createOrderRecord22();

document.getElementById("cohesionView22").textContent = "Cohesion: " + cohesionResult22;


// 7. LOOSE COUPLING

class PaymentGateway22 {
    makePayment22(amountValue22) {
        return `Payment of ₹${amountValue22} completed`;
    }
}

class CheckoutService22 {
    constructor(paymentTool22) {
        // Dependency comes from outside
        this.paymentTool22 = paymentTool22;
    }

    completeCheckout22() {
        return this.paymentTool22.makePayment22(500);
    }
}

const paymentGateway22 = new PaymentGateway22();

const checkoutService22 = new CheckoutService22(paymentGateway22);

const looseCouplingResult22 = checkoutService22.completeCheckout22();

document.getElementById("looseCouplingView22").textContent = "Loose Coupling: " + looseCouplingResult22;


// 8. HIGH COHESION

class EmailSender22 {
    sendEmail22(receiverValue22, messageValue22) {
        return `Email sent to ${receiverValue22}`;
    }
}

class SmsSender22 {
    sendSms22(receiverValue22, messageValue22) {
        return `SMS sent to ${receiverValue22}`;
    }
}

const emailSender22 = new EmailSender22();

const highCohesionResult22 = emailSender22.sendEmail22("user@example.com", "Welcome");

document.getElementById("highCohesionView22").textContent = "High Cohesion: " + highCohesionResult22;


// 9. COMPOSITION VS INHERITANCE

// ----- Inheritance -----

class InheritanceVehicle22 {
    moveVehicle22() {
        return "Vehicle is moving";
    }
}

class InheritanceCar22 extends InheritanceVehicle22 {
    driveInheritedCar22() {
        return this.moveVehicle22();
    }
}

const inheritanceCar22 = new InheritanceCar22();


// ----- Composition -----

class CompositionEngine22 {
    startEnginePart22() {
        return "Engine is running";
    }
}

class CompositionCar22 {
    constructor(enginePartObject22) {
        // Car receives an engine object
        this.enginePartObject22 = enginePartObject22;
    }

    driveComposedCar22() {
        return this.enginePartObject22.startEnginePart22();
    }
}

const compositionEngine22 = new CompositionEngine22();

const compositionCar22 = new CompositionCar22(compositionEngine22);

const comparisonResult22 =
    `Inheritance: ${inheritanceCar22.driveInheritedCar22()} | ` +
    `Composition: ${compositionCar22.driveComposedCar22()}`;

document.getElementById("compositionInheritanceView22").textContent = comparisonResult22;