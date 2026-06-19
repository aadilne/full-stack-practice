

//Arithmetic Operators

let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);



//Assignment Operators
let num = 10;

num += 5;
console.log(num);

num -= 3;
console.log(num);

num *= 2;
console.log(num);



//Comparison Operators
console.log(5 == "5");
console.log(5 === "5");

console.log(10 > 5);
console.log(10 < 5);



//Logical Operators
let age = 20;
let hasID = true;

console.log(age >= 18 && hasID);

console.log(age < 18 || hasID);

console.log(!hasID);


//Increment & Decrement
let count = 5;

count++;
console.log(count);

count--;
console.log(count);


//Ternary Operator   //condition ? trueValue : falseValue

let ageA = 20;

let result = ageA >= 18 ? "Adult" : "Minor";

console.log(result);




//Type Operators
let name = "Aadil";

console.log(typeof name);
console.log(typeof 100);
console.log(typeof true);


//String Operator
let firstName = "Aadil";
let lastName = "Nezam";

console.log(firstName + " " + lastName);


//Nullish Coalescing Operator ??
let userName = null;

console.log(userName ?? "Guest");


//Optional Chaining ?
let user = {
    name: "Aadil"
};

console.log(user?.name);
console.log(user?.city);



console.log(10 + 5 * 2);

let ageB = 17;

let resultB = ageB >= 18 ? "Adult" : "Minor";

console.log(resultB);




// Mini project
let studentName = "Aadil";

let math = 80;
let english = 75;
let science = 90;

let total =
math + english + science;

let percentage =
(total / 300) * 100;

let resultC =
percentage >= 33 ? "PASS" : "FAIL";

console.log("Name :", studentName);
console.log("Total :", total);
console.log("Percentage :", percentage);
console.log("Result :", resultC);


let numC = 11;
if(numC>10 && numC<20){
console.log("number is between 10 and 20");
}


