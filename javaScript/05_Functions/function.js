
// 1. Function Declaration
{ 
function greet() {
    console.log("Hello");
}

greet();

}

// with parameters function declaration
{
    function greet(name) {
    console.log("Hello " + name);
}

greet("John");

}

// Default Parameters
{
    function greet(name = "Guest") {
    console.log("Hello " + name);
}

greet();
greet("Aadil");
}



{
    function student(name, age) {
    console.log(name);
    console.log(age);
}

student("Aadil", 22);
}





{
 // Hoisting
hello();

function hello() {
    console.log("JavaScript");
}

hello();
}


// 2 Function Expression

{
    const greet = function () {
    console.log("Hello");
  };

greet();
}


{
// This Arrow function expression  is not hoisted
// greet(); // Uncaught ReferenceError: Cannot access 'greet' before initialization

/* greet();

const greet = function () {
    console.log("Hello");
};
 */

}


// 3. Arrow Function

{
    const greet = () => {
    console.log("Arrow function Hello");
  };

  greet();

}

{
    const add = (a, b) => {
    console.log(a + b);
};

add(10, 20);
}




// Anonymous Function
// setTimeout is Higher Order Function and Arrow function is Anonymous Function
{ 
setTimeout(() => {
    console.log("Hello after 3 seconds");
} , 3000);

}


{

    const greet = name => {
    console.log("Hello " + name);
};

greet("Aadil");

}




// callback function   
{
function hello() {
    console.log("Hello");
}

function greet(callback) {
    callback();
}

greet(hello);

}



{
    function sayHello(name) {
    console.log("Hello " + name);
}

function process(callback) {
    callback("Aadil");
}

process(sayHello);
}



// calculation using callback function  
{

    function add(a, b) {
    console.log(a + b);
}

function subtract(a, b) {
    console.log(a - b);
}

function multiply(a, b) {
    console.log(a * b);
}

function calculate(a, b, callback) {
    callback(a, b);
}

calculate(10, 5, add);       // 15

calculate(10, 5, subtract);  // 5

calculate(10, 5, multiply);  // 50
}



// anonymous function callback
{
    function calculate(a, b, callback) {
    callback(a, b);
}

calculate(10, 5, function (x, y) {
    console.log(x + y);
});
}


// Arrow function callback
{
    function calculate(a, b, callback) {
    callback(a, b);
}

calculate(10, 5, (x, y) => {
    console.log(x + y);
});
}



// foreach loop with callback functionk

{
    const names = ["Aadil", "Rahul", "Aman"];

    names.forEach((name) => {
    console.log("Hello " + name);
});
}



{
    const numbers = [1, 2, 3, 4, 5];
    numbers.forEach((num) =>{
        console.log(num * 2);
    })

}


{
    const fruits = ["Apple" , "Banana", "Mango"];

    fruits.forEach( (value , index) =>{
        console.log(value , index);

    });
}

{

    const fruits = ["Apple" , "Banana" , "Mango"];

    fruits.forEach ((value , index , array) => {
        console.log(value , index , array);
    })
}

{
    const fruits = ["Apple" , "Banana" , "Mango"];

    fruits.forEach((value , idx) =>{

        let add = value + " is at index " + idx;
        console.log(add);
    });
}