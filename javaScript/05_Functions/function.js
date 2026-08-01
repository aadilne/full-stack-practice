
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
// This function expression  is not hoisted
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


// Anonymous Function
// setTimeout is Higher Order Function and Arrow function is Anonymous Function

setTimeout(() => {
    console.log("Hello after 3 seconds");
} , 3000);





