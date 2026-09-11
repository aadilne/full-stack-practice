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



