
console.log("conditionals operator practice");

let age = 6;

if (age >= 18) {
    console.log("you can drive")
} else {
    console.log("you can't drive")
}


if (age >= 18) console.log("you can drive");
else console.log("you can't drive")

let result = age>=18 ? "you can drive" : "you can't drive"
console.log(result)



//1.  if Statement
{
    let age = 20;

if (age >= 18) {
    console.log("Eligible");
}

}

// 2. if...else Statement
{
    let age = 15;
    
    if (age >=18){
        console.log ("Eligable");
    }else{
        console.log("Not Eligable");
    }
}


//3. Ternary Operator (? :)
// condition ? value1 : value2;

{
    let age = 20;

console.log(age >= 18 ? "Eligible" : "Not Eligible");

}


{

let num = 10;

console.log(num % 2 === 0 ? "Even" : "Odd");

}


// Nested Ternary
{

let marks = 75;

console.log(
    marks >= 90 ? "A" :
    marks >= 75 ? "B" :
    marks >= 50 ? "C" :
    "Fail"
);

}


// Variable me Store karna
{

let age = 18;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);

}

// 