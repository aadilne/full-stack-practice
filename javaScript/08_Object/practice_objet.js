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