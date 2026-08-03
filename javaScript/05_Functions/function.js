
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

    fruits.forEach ((value , index , array) => {    // first parameter is value, second is index and third is array
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


// return keyword

{
    function add(a, b) {
    return a + b;
}

const result = add(10, 20);

console.log(result);

}

{
    function multiply(a, b) {
    return a * b;
}

const result = multiply(5, 4);

console.log(result + 10);
}


{
    function test() {
    return 10;             // after return statement, no code will be executed

    console.log("Hello");
}
}

{
    function check(age) {

    if (age >= 18) {
        return "Adult";   // return statement will exit the function and return the value
    }                     // return execute hua → value wapas gayi + current function execution wahi stop

    return "Minor";   // if age is less than 18, it will return "Minor"
}

console.log(check(20));
}


{
    function add(a, b) {
    console.log(a + b);  //print 30
}

const answer = add(10, 20);

console.log(answer);  // undefined because add function does not return any value
}


//Function Returning Another Function
// outer function returns inner function
// outer function is called Higher Order Function (HOF)
{
    function outer() {

    function inner() {
        console.log("Hello");
    }

    return inner;
}

const result = outer();

result();
}



{
    function outer() {

    function inner() {
        return 100;
    }

    return inner;
}

const result = outer();

console.log(result());  // function ko CALL karo aur uski returned value print karo

//console.log(result);
//function/reference ko dekho lekin value print nahi hoga

}


//  IIFE — Immediately Invoked Function Expression.      (anonymous function)();
{ 
(function () {
    console.log("Immediately Invoked Function Expression");
})();
}


{
    (function (name) {
    console.log("Hello " + name);
})("Aadil");
}

{
    (function (a, b) {
    console.log(a + b);
})(10, 20);
}



//Recursive Function
// A function that calls itself is called a recursive function.
{
    function count(n) {

    if (n === 0) {
        return;
    }

    console.log(n);

    count(n - 1); //  function call itself with n-1 until n is 0 
}

  count(3);
}


{
    function number(n) {

    if (n === 0) {
        return;
    }

    console.log("Before:", n);

    number(n - 1);

    console.log("After:", n);
}

number(3);
}

//Call Stack skiped




// 1. Global Scope
{
const name = "Aadil";

function greet() {
    console.log(name);
}

greet();
}


{
 const name = "Aadil";

function greet() {
    console.log(name);
}

greet();

console.log(name);
}


// 2. Local / Function Scope

{
    function greet() {

    const name = "Aadil";

    console.log(name);
}

greet();
}

{
function greet() {

    const name = "Aadil";

    console.log(name);
}

greet();

console.log(name);  // Uncaught ReferenceError: name is not defined because name is defined inside the function and cannot be accessed outside the function

}


{
    const age = 22;

function show() {

    const name = "Aadil";

    console.log(age); // age prit because it is defined in the global scope
    console.log(name);
}

show();

console.log(age); 
console.log(name);  // name not prit because it is defined inside the function and cannot be accessed outside the function
}


{
    const city = "Patna";      //  Global

function student(name) {   //  name = Local parameter

    const course = "JavaScript"; //  Local variable

    console.log(city);
    console.log(name);
    console.log(course);
}

student("Aadil");

console.log(city);
}



{
const city = "Patna"; // Global

function show() {
    const city = "Delhi"; // Local

    console.log(city);  // here access same name  Delhi
}

show();

console.log(city); // here access same name  Patna
}



//🔥 HOISTING:
{
    
//Function Declaration ko declaration se PEHLE call kar sakte hain.

add(5, 4);       // ✅ Works

function add(a, b) {
    console.log(a + b);
}
}

//Function Expression ko declaration se PEHLE call nahi kar sakte hain.
{
  //  add(5, 4);       // ❌ ERROR

const add = function(a, b) {
    console.log(a + b);
};
}

{
   // add(5, 4);       // ❌ ERROR

const add = (a, b) => {
    console.log(a + b);
};
}



//Rest Parameters ...args
// Rest Parameter multiple arguments ko collect karke ek Array bana deta hai.
//
{
    function show(...values) {
    console.log(values);
}

show(10, 20, 30);
}


{
    function show(...numbers) {

    numbers.forEach((num) => {
        console.log(num);
    });

}

show(10, 20, 30);
}


{
    function user(name, age, ...skills) {  // rest parameter must be the last parameter

    console.log(name);
    console.log(age);
    console.log(skills);
}

user("Aadil", 22, "HTML", "CSS", "JavaScript");
}