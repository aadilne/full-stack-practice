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