
console.log("Array Methods in JavaScript");


{
    let fruits= ["Apple", "Banana", "Mango", "Orange" , "Grapes"];
    console.log("Fruits: " , fruits);

    console.log("Apple ka index:", fruits.indexOf("Apple"));
    console.log("Mango ka index:", fruits.indexOf("Mango"));
    console.log("Banana ka index:", fruits.indexOf("Banana"));

    console.log("Index 0:", fruits[0]);
    console.log("Index 1:", fruits[1]);
    console.log("Index 2:", fruits[2]);

    console.log("Length of Fruits Array:", fruits.length);

    fruits[1] = "Orange";

    console.log("Value change hone ke baad:", fruits);

}

// Array me different data types
{
    let data = ["Aadil", 22, true, null, undefined];

console.log("Different data types:", data);
}


{ 
// Nested Array
let studentsData = [
    ["Aadil", 22],
    ["Nezam", 23],
    ["Rahul", 21]
];

console.log("Nested Array:", studentsData);

// Aadil
console.log("Student name:", studentsData[0][0]);

// Aadil ki age
console.log("Student age:", studentsData[0][1]);

// Nezam
console.log("Student name:", studentsData[1][0]);

// Nezam ki age
console.log("Student age:", studentsData[1][1]);

}

{ 
//  push()
// Add value at the END of the array

let fruits = ["Apple", "Mango", "Banana"];

fruits.push("Orange");

console.log("push():", fruits);
// Output: ["Apple", "Mango", "Banana", "Orange"]



// 11. pop()
// Remove value from the End of the array

fruits.pop();

console.log("pop():", fruits);
// Output: ["Apple", "Mango", "Banana"]



// 12. unshift()
// Add value at the START of the array

fruits.unshift("Orange");

console.log("unshift():", fruits);
// Output: ["Orange", "Apple", "Mango", "Banana"]



// 13. shift()
// Remove value from the START of the array

fruits.shift();

console.log("shift():", fruits);
// Output: ["Apple", "Mango", "Banana"]



// 14. splice()
// Add / Remove / Replace value in the array

let students = ["Aadil", "Rahul", "Aman", "Nezam"];

// Index 1 se 1 value remove
students.splice(1, 1);

console.log("splice() remove:", students);
// Output: ["Aadil", "Aman", "Nezam"]


// splice() se value add karna
students.splice(1, 0, "Rahul");

console.log("splice() add:", students);
// Output: ["Aadil", "Rahul", "Aman", "Nezam"]


// splice() se value replace karna
students.splice(1, 1, "Rohit");

console.log("splice() replace:", students);
// Output: ["Aadil", "Rohit", "Aman", "Nezam"]

console.log("splice() 2" , students.splice(1, 2, "sumit", "Rohan"));



// slice() 
// Copy value from the array
// splice() changes the original array, but slice() does not change the original array.


let numbers = [10, 20, 30, 40, 50];

let newNumbers = numbers.slice(1, 4);

console.log("Original Array:", numbers);
// Output: [10, 20, 30, 40, 50]

console.log("slice():", newNumbers);
// Output: [20, 30, 40]

}



{
    
// 16. indexOf()
// Returns the index of the first occurrence of a specified value in an array
// Value nahi mile to -1 return karta hai

let fruits = ["Apple", "Mango", "Banana", "Mango", "Orange"];

console.log("indexOf():", fruits.indexOf("Mango"));
// Output: 1

console.log("indexOf():", fruits.indexOf("Orange"));
// Output: 4

console.log("indexOf():", fruits.indexOf("Grapes"));
// Output: -1



// 17. lastIndexOf()
// Kisi value ka LAST index batata hai
// Value nahi mile to -1 return karta hai

console.log("lastIndexOf():", fruits.lastIndexOf("Mango"));
// Output: 3

console.log("lastIndexOf():", fruits.lastIndexOf("Apple"));
// Output: 0

console.log("lastIndexOf():", fruits.lastIndexOf("Grapes"));
// Output: -1



// 18. includes()
// it's checks the value is present in the array or not
// Result: true / false

console.log("includes():", fruits.includes("Banana"));
// Output: true

console.log("includes():", fruits.includes("Grapes"));
// Output: false



// 19. find()

// Condition ke according FIRST matching value return karta hai

let numbers = [10, 25, 30, 45, 50];


let result2 = numbers.find(value => value > 40);

console.log("find() 2:", result2);
// Output: 45



// 20. findIndex()
// Condition ke according FIRST matching value ka INDEX return karta hai
// Match nahi mila to -1 return karta hai

let result3 = numbers.findIndex(function(value) {
    return value > 30;
});

console.log("findIndex():", result3);
// Output: 3




let result4 = numbers.findIndex(value => value > 40);

console.log("findIndex() 2:", result4);
// Output: 3



// find() + findIndex() with Objects


let students = [
    { name: "Aadil", age: 22 },
    { name: "Rahul", age: 21 },
    { name: "Nezam", age: 23 }
];

let student = students.find(student => student.age > 21);

console.log("Student:", student);
// Output: { name: "Aadil", age: 22 }


let studentIndex = students.findIndex(student => student.age > 21);

console.log("Student Index:", studentIndex);
// Output: 0
}


{
    let numbers = [10 , 20 , 30 , 40 , 50 ];
   let num1 = numbers.forEach(value => {
    console.log("forEach():", value)    
 } );
    
}