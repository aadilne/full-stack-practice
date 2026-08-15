{
    
// Part 13: Practical Object Concepts




// 65. Array of Objects


let students = [

    {
        name: "Aadil",
        age: 22
    },

    {
        name: "Rahul",
        age: 23
    },

    {
        name: "Aman",
        age: 21
    }

];

console.log(students);


// First Object
console.log(students[0]);


// First Object ki name
console.log(students[0].name);


// Second Object ki age
console.log(students[1].age);



// 66. Objects ko Search Karna


let student = students.find(function(student) {

    return student.name === "Aadil";

});

console.log(student);


// Not Found
let result = students.find(function(student) {

    return student.name === "XYZ";

});

console.log(result);
// undefined



// 67. Objects ko Filter Karna


let olderStudents = students.filter(function(student) {

    return student.age > 22;

});

console.log(olderStudents);



// 68. Objects ko Map Karna


// Sirf names nikalna

let names = students.map(function(student) {

    return student.name;

});

console.log(names);


// Map se new Objects banana

let updatedStudents = students.map(function(student) {

    return {

        name: student.name,
        age: student.age,
        status: "Student"

    };

});

console.log(updatedStudents);



// 69. Object Data ko Sort Karna


let students2 = [

    {
        name: "Aadil",
        age: 25
    },

    {
        name: "Rahul",
        age: 20
    },

    {
        name: "Aman",
        age: 23
    }

];


// Ascending
students2.sort(function(a, b) {

    return a.age - b.age;

});

console.log(students2);


// Descending
students2.sort(function(a, b) {

    return b.age - a.age;

});

console.log(students2);


// Name ke according sorting

students2.sort(function(a, b) {

    return a.name.localeCompare(b.name);

});

console.log(students2);



// 70. Real-world JSON-like Data


let products = [

    {
        id: 1,
        name: "Laptop",
        price: 50000,
        category: "Electronics",
        inStock: true
    },

    {
        id: 2,
        name: "Mobile",
        price: 20000,
        category: "Electronics",
        inStock: true
    },

    {
        id: 3,
        name: "Shoes",
        price: 3000,
        category: "Fashion",
        inStock: false
    },

    {
        id: 4,
        name: "Watch",
        price: 5000,
        category: "Fashion",
        inStock: true
    }

];



// Product Search


let mobile = products.find(function(product) {

    return product.name === "Mobile";

});

console.log(mobile);



// Electronics Filter


let electronics = products.filter(function(product) {

    return product.category === "Electronics";

});

console.log(electronics);



// Product Names


let productNames = products.map(function(product) {

    return product.name;

});

console.log(productNames);



// Price Sorting


// Low → High

products.sort(function(a, b) {

    return a.price - b.price;

});

console.log(products);


// High → Low

products.sort(function(a, b) {

    return b.price - a.price;

});

console.log(products);



// In-Stock Products


let availableProducts = products.filter(function(product) {

    return product.inStock === true;

});

console.log(availableProducts);
}

{



// 71. Student Object


let student = {

    name: "Aadil",
    age: 22,
    course: "BCA",
    marks: 85,

    showResult: function() {

        if (this.marks >= 40) {
            console.log("Pass");
        } else {
            console.log("Fail");
        }

    }

};

console.log(student.name);
console.log(student.age);
console.log(student.course);
console.log(student.marks);

student.showResult();



// 72. Employee Object


let employee = {

    name: "Aadil",
    age: 22,
    position: "Developer",
    salary: 40000

};

console.log(employee);

employee.salary = 50000;

employee.company = "ABC Technologies";

console.log(employee);



// 73. Product Object


let product = {

    id: 1,
    name: "Laptop",
    price: 50000,
    category: "Electronics",
    inStock: true

};

console.log(product.name);
console.log(product.price);
console.log(product.category);

if (product.inStock) {

    console.log("Product Available");

} else {

    console.log("Out of Stock");

}



// 74. Shopping Cart


let cart = [

    {
        name: "Laptop",
        price: 50000,
        quantity: 1
    },

    {
        name: "Mouse",
        price: 1000,
        quantity: 2
    },

    {
        name: "Keyboard",
        price: 2000,
        quantity: 1
    }

];

let total = 0;

cart.forEach(function(product) {

    total += product.price * product.quantity;

});

console.log("Cart Total:", total);



// 75. Student Management


let students = [

    {
        id: 1,
        name: "Aadil",
        age: 22,
        marks: 85
    },

    {
        id: 2,
        name: "Rahul",
        age: 23,
        marks: 72
    },

    {
        id: 3,
        name: "Aman",
        age: 21,
        marks: 91
    }

];


// -------- Search Student --------

let foundStudent = students.find(function(student) {

    return student.name === "Aadil";

});

console.log("Found:", foundStudent);


// -------- Topper Students --------

let toppers = students.filter(function(student) {

    return student.marks >= 80;

});

console.log("Toppers:", toppers);


// -------- Student Names --------

let studentNames = students.map(function(student) {

    return student.name;

});

console.log("Names:", studentNames);


// -------- Sort by Marks --------

students.sort(function(a, b) {

    return b.marks - a.marks;

});

console.log("Sorted Students:", students);



// 76. Product Management


let products = [

    {
        id: 1,
        name: "Laptop",
        price: 50000,
        category: "Electronics",
        stock: 5
    },

    {
        id: 2,
        name: "Mobile",
        price: 20000,
        category: "Electronics",
        stock: 10
    },

    {
        id: 3,
        name: "Shoes",
        price: 3000,
        category: "Fashion",
        stock: 0
    }

];


// -------- Search Product --------

let foundProduct = products.find(function(product) {

    return product.id === 2;

});

console.log("Found Product:", foundProduct);


// -------- Available Products --------

let availableProducts = products.filter(function(product) {

    return product.stock > 0;

});

console.log("Available:", availableProducts);


// -------- Electronics --------

let electronics = products.filter(function(product) {

    return product.category === "Electronics";

});

console.log("Electronics:", electronics);


// -------- Product Prices --------

let prices = products.map(function(product) {

    return product.price;

});

console.log("Prices:", prices);



// 77. Mini Project
// Student Management System


let studentList = [

    {
        id: 1,
        name: "Aadil",
        age: 22,
        course: "BCA",
        marks: 85
    },

    {
        id: 2,
        name: "Rahul",
        age: 23,
        course: "MCA",
        marks: 72
    },

    {
        id: 3,
        name: "Aman",
        age: 21,
        course: "BCA",
        marks: 91
    }

];


// -------- Display Students --------

console.log("All Students:");

studentList.forEach((student) => {

    console.log(student);

});


// -------- Search Student --------

let searchStudent = studentList.find(function(student) {

    return student.id === 2;

});

console.log("Search Result:", searchStudent);


// -------- Update Student --------

let updateStudent = studentList.find(function(student) {

    return student.id === 2;

});

if (updateStudent) {

    updateStudent.marks = 80;

}

console.log("After Update:", studentList);


// -------- Delete Student --------

studentList = studentList.filter(function(student) {

    return student.id !== 3;

});

console.log("After Delete:", studentList);


// -------- Filter BCA Students --------

let bcaStudents = studentList.filter(function(student) {

    return student.course === "BCA";

});

console.log("BCA Students:", bcaStudents);


// -------- Find Topper --------

let topper = studentList.reduce(function(topper, student) {

    if (student.marks > topper.marks) {

        return student;

    }

    return topper;

});

console.log("Topper:", topper);


// -------- Sort by Marks --------

studentList.sort(function(a, b) {

    return b.marks - a.marks;

});

console.log("Sorted by Marks:", studentList);


// -------- Student Names --------

let names = studentList.map(function(student) {

    return student.name;

});

console.log("Student Names:", names);
}

