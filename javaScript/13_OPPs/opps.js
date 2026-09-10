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