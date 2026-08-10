

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
    
//  indexOf()
// Returns the index of the first occurrence of a specified value in an array
// Value nahi mile to -1 return karta hai

let fruits = ["Apple", "Mango", "Banana", "Mango", "Orange"];

console.log("indexOf():", fruits.indexOf("Mango"));
// Output: 1

console.log("indexOf():", fruits.indexOf("Orange"));
// Output: 4

console.log("indexOf():", fruits.indexOf("Grapes"));
// Output: -1



//  lastIndexOf()
// Kisi value ka LAST index batata hai
// Value nahi mile to -1 return karta hai

console.log("lastIndexOf():", fruits.lastIndexOf("Mango"));
// Output: 3

console.log("lastIndexOf():", fruits.lastIndexOf("Apple"));
// Output: 0

console.log("lastIndexOf():", fruits.lastIndexOf("Grapes"));
// Output: -1



//  includes()
// it's checks the value is present in the array or not
// Result: true / false

console.log("includes():", fruits.includes("Banana"));
// Output: true

console.log("includes():", fruits.includes("Grapes"));
// Output: false



//  find()

// Condition ke according FIRST matching value return karta hai

let numbers = [10, 25, 30, 45, 50];


let result2 = numbers.find(value => value > 40);

console.log("find() 2:", result2);
// Output: 45



//  findIndex()
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
   numbers.forEach(value => {
    console.log("forEach():", value)    
 } );

 
//  forEach()

// Array ki har value par ek-ek karke kaam karta hai
// Ye normally koi new Array return nahi karta

let numberss = [10, 20, 30, 40, 50];

numberss.forEach(function(value) {
    console.log("forEach:", value);
});

// Output:
// 10
// 20
// 30
// 40
// 50


// forEach() me index bhi le sakte hain

numbers.forEach(function(value, index) {
    console.log("Index:", index, "Value:", value);
});

// Output:
// Index: 0 Value: 10
// Index: 1 Value: 20
// Index: 2 Value: 30
// Index: 3 Value: 40
// Index: 4 Value: 50



//  map()

// Har value par operation karta hai
// Aur NEW Array return karta hai

let numbers2 = [10, 20, 30, 40];

let doubleNumbers = numbers2.map(function(value) {
    return value * 2;
});

console.log("map():", doubleNumbers);

// Output:
// [20, 40, 60, 80]


// Arrow function

let tripleNumbers = numbers2.map(value => value * 3);

console.log("map() 2:", tripleNumbers);

// Output:
// [30, 60, 90, 120]



//  filter()

// Condition ke according values select karta hai
// Aur NEW Array return karta hai

let numbers3 = [10, 15, 20, 25, 30, 35];

let greaterThan20 = numbers3.filter(function(value) {
    return value > 20;
});

console.log("filter():", greaterThan20);

// Output:
// [25, 30, 35]


// Arrow function

let evenNumbers = numbers3.filter(value => value % 2 === 0);

console.log("filter() 2:", evenNumbers);

// Output:
// [10, 20, 30]



//  reduce()

// Array ki saari values ko combine karke
// ek single result banata hai

let numbers4 = [10, 20, 30, 40];

let total = numbers4.reduce(function(sum, value) {
    return sum + value;
}, 0);

console.log("reduce():", total);

// Output:
// 100


// Step-by-step:
// sum = 0,  value = 10 → 10
// sum = 10, value = 20 → 30
// sum = 30, value = 30 → 60
// sum = 60, value = 40 → 100



//  some()

// Check karta hai ki KAM SE KAM EK value
// condition ko satisfy karti hai ya nahi
// Result: true / false

let numbers5 = [10, 20, 30, 40, 50];

let checkSome = numbers5.some(value => value > 40);

console.log("some():", checkSome);

// Output:
// true

// Kyunki 50 > 40 hai


let checkSome2 = numbers5.some(value => value > 100);

console.log("some() 2:", checkSome2);

// Output:
// false



//  every()

// Check karta hai ki KYA SABHI values
// condition ko satisfy karti hain
// Result: true / false

let numbers6 = [10, 20, 30, 40];

let checkEvery = numbers6.every(value => value > 5);

console.log("every():", checkEvery);

// Output:
// true

// Kyunki sabhi values 5 se badi hain


let checkEvery2 = numbers6.every(value => value > 20);

console.log("every() 2:", checkEvery2);

// Output:
// false

// Kyunki 10 aur 20, 20 se bade nahi hain



//  find()

// Condition ke according FIRST matching VALUE
// return karta hai

let numbers7 = [10, 25, 30, 45, 50];

let foundValue = numbers7.find(value => value > 30);

console.log("find():", foundValue);

// Output:
// 45

// Kyunki 30 se badi FIRST value 45 hai


//  findIndex()

// Condition ke according FIRST matching VALUE ka
// INDEX return karta hai

let foundIndex = numbers7.findIndex(value => value > 30);

console.log("findIndex():", foundIndex);

// Output:
// 3

// Kyunki 45 ka index 3 hai
    
}


{

// sort()
// Array ko sort karta hai
// IMPORTANT: Original Array ko change karta hai


//String Sorting

let fruits = ["Mango", "Apple", "Orange", "Banana"];

fruits.sort();

console.log("sort():", fruits);

// Output:
// ["Apple", "Banana", "Mango", "Orange"]


//Number Sorting
// IMPORTANT:
// sort() numbers ko by default string ki tarah compare karta hai

let numbers = [10, 5, 100, 25, 2];

numbers.sort();

console.log("Number sort():", numbers);

// Output:
// [10, 100, 2, 25, 5]
// Ye numerical ascending order nahi hai!


// Numerical Ascending Order
// Chhote se bade

numbers.sort((a, b) => {
    return a - b;
});

console.log("Ascending:", numbers);

// Output:
// [2, 5, 10, 25, 100]


// Numerical Descending Order
// Bade se chhote

numbers.sort((a, b) => {
    return b - a;
});

console.log("Descending:", numbers);

// Output:
// [100, 25, 10, 5, 2]




//  reverse()

// Array ke elements ka order ulta karta hai
// Original Array ko CHANGE karta hai

let names = ["Aadil", "Rahul", "Aman", "Nezam"];

names.reverse();

console.log("reverse():", names);

// Output:
// ["Nezam", "Aman", "Rahul", "Aadil"]




//  toSorted()

// Array ko sorted form me NEW Array ke roop me return karta hai
// Original Array ko CHANGE nahi karta

let marks = [50, 20, 80, 40, 10];

let sortedMarks = marks.toSorted((a, b) => {
    return a - b;
});

console.log("Original marks:", marks);

// Output:
// [50, 20, 80, 40, 10]

console.log("toSorted():", sortedMarks);

// Output:
// [10, 20, 40, 50, 80]




//  toReversed()

// Array ko reverse karke NEW Array return karta hai
// Original Array ko CHANGE nahi karta

let students = ["Aadil", "Rahul", "Aman", "Nezam"];

let reversedStudents = students.toReversed();

console.log("Original students:", students);

// Output:
// ["Aadil", "Rahul", "Aman", "Nezam"]

console.log("toReversed():", reversedStudents);

// Output:
// ["Nezam", "Aman", "Rahul", "Aadil"]

}



{
  
// join()

// Array ki saari values ko ek String me convert karta hai
// Aur hum separator khud decide kar sakte hain


let fruits = ["Apple", "Mango", "Banana"];

let result1 = fruits.join();

console.log("join():", result1);

// Output:
// Apple,Mango,Banana


// Apna separator dena

let result2 = fruits.join(" ");

console.log("join(' '):", result2);

// Output:
// Apple Mango Banana


let result3 = fruits.join(" - ");

console.log("join(' - '):", result3);

// Output:
// Apple - Mango - Banana


let result4 = fruits.join(", ");

console.log("join(', '):", result4);

// Output:
// Apple, Mango, Banana




// toString()
// Array ko String me convert karta hai
// Default separator comma (,) hota hai


let numbers = [10, 20, 30, 40];

let result5 = numbers.toString();

console.log("toString():", result5);

// Output:
// 10,20,30,40


// IMPORTANT:
// toString() me separator choose nahi kar sakte

console.log(numbers.toString());

// Output:
// 10,20,30,40



// split()
// String ko todkar NEW Array banata hai
// Isliye split() String par lagta hai, Array par nahi


let name = "Aadil Nezam";

let result6 = name.split(" ");

console.log("split():", result6);

// Output:
// ["Aadil", "Nezam"]


// Comma ke according todna

let fruitsString = "Apple,Mango,Banana";

let result7 = fruitsString.split(",");

console.log("split(','):", result7);

// Output:
// ["Apple", "Mango", "Banana"]


// Har character ko alag karna

let word = "HELLO";

let result8 = word.split("");

console.log("split(''):", result8);

// Output:
// ["H", "E", "L", "L", "O"]




// JOIN + SPLIT ka relation


// Array → String

let languages = ["HTML", "CSS", "JavaScript"];

let stringData = languages.join(",");

console.log("Array → String:", stringData);

// Output:
// HTML,CSS,JavaScript


// String → Array

let arrayData = stringData.split(",");

console.log("String → Array:", arrayData);

// Output:
// ["HTML", "CSS", "JavaScript"]
}




{

// concat()

// Do ya do se zyada Arrays ko combine karta hai  , return new array
// Original Arrays ko change nahi karta


let fruits1 = ["Apple", "Mango"];
let fruits2 = ["Banana", "Orange"];

let allFruits = fruits1.concat(fruits2);

console.log("concat():", allFruits);

// Output:
// ["Apple", "Mango", "Banana", "Orange"]


// Multiple Arrays bhi combine kar sakte hain

let fruits3 = ["Grapes"];

let allFruits2 = fruits1.concat(fruits2, fruits3);

console.log("concat() 2:", allFruits2);

// Output:
// ["Apple", "Mango", "Banana", "Orange", "Grapes"]


// Original Arrays same rahenge

console.log("fruits1:", fruits1);
// ["Apple", "Mango"]

console.log("fruits2:", fruits2);
// ["Banana", "Orange"]




// Spread Operator (...)

// Array ki values ko "spread" karta hai
// Isse Arrays ko combine ya copy kar sakte hain


let numbers1 = [10, 20, 30];
let numbers2 = [40, 50, 60];

let allNumbers = [...numbers1, ...numbers2];

console.log("Spread Combine:", allNumbers);

// Output:
// [10, 20, 30, 40, 50, 60]


// Spread se Array copy karna

let original = [10, 20, 30];

let copy = [...original];

console.log("Original:", original);
// [10, 20, 30]

console.log("Copy:", copy);
// [10, 20, 30]


// Copy me change karne par original change nahi hoga

copy[0] = 100;

console.log("Changed Copy:", copy);
// [100, 20, 30]

console.log("Original:", original);
// [10, 20, 30]




//  Array.from()

// Kisi iterable / array-like value se NEW Array banata hai


let name = "Aadil";

let letters = Array.from(name);

console.log("Array.from():", letters);

// Output:
// ["A", "a", "d", "i", "l"]


// String ko Array me convert kar diya


// Number par directly Array.from() ka use

let numbers3 = Array.from([10, 20, 30]);

console.log("Array.from() 2:", numbers3);

// Output:
// [10, 20, 30]




// Array.isArray()

// Check karta hai ki koi value Array hai ya nahi
// Result: true / false


let arr = [10, 20, 30];

console.log("Array hai?:", Array.isArray(arr));

// Output:
// true


let value = "Aadil";

console.log("Array hai?:", Array.isArray(value));

// Output:
// false


let number = 100;

console.log("Array hai?:", Array.isArray(number));

// Output:
// false




// 40. Array.of()

// Di hui values se NEW Array banata hai


let result1 = Array.of(10, 20, 30);

console.log("Array.of():", result1);

// Output:
// [10, 20, 30]


let result2 = Array.of("Aadil", 22, true);

console.log("Array.of() 2:", result2);

// Output:
// ["Aadil", 22, true]


// Important Example

let a = Array.of(5);

console.log("Array.of(5):", a);

// Output:
// [5]
}


{

    
// 41. DESTRUCTURING

// Array se values ko directly alag-alag variables me nikalna


let numbers = [10, 20, 30];

let [a, b, c] = numbers;

console.log("a:", a);
console.log("b:", b);
console.log("c:", c);

// Output:
// a: 10
// b: 20
// c: 30





// 42. REST OPERATOR WITH ARRAY
// Rest operator (...) remaining values ko
// ek naye Array me collect karta hai


let values = [10, 20, 30, 40, 50];

let [first, second, ...remaining] = values;

console.log("first:", first);
console.log("second:", second);
console.log("remaining:", remaining);

// Output:
// first: 10
// second: 20
// remaining: [30, 40, 50]




// 43. NESTED ARRAY DESTRUCTURING

// Nested Array ke andar ki values ko bhi
// destructuring kar sakte hain


let students = [
    ["Aadil", 22],
    ["Rahul", 21]
];

let [[name1, age1], [name2, age2]] = students;

console.log(name1);
console.log(age1);
console.log(name2);
console.log(age2);

// Output:
// Aadil
// 22
// Rahul
// 21




// SHALLOW COPY
// Array ki ek level tak copy banana
// Spread (...) se shallow copy ban sakti hai


let original = [10, 20, 30];

let copy = [...original];

copy[0] = 100;

console.log("Original:", original);
console.log("Copy:", copy);

// Output:
// Original: [10, 20, 30]
// Copy:     [100, 20, 30]


// Lekin nested Array ke saath dikkat ho sakti hai

let original2 = [
    [10, 20],
    [30, 40]
];

let copy2 = [...original2];

copy2[0][0] = 100;

console.log("Original2:", original2);
console.log("Copy2:", copy2);

// Output:
// Original2: [[100, 20], [30, 40]]
// Copy2:     [[100, 20], [30, 40]]
//
// Kyunki inner Array ka reference same hai.




// ARRAY REFERENCE

// Jab ek Array variable ko doosre variable me
// directly assign karte hain, dono same Array ko
// refer karte hain


let arr1 = [10, 20, 30];

let arr2 = arr1;

arr2[0] = 100;

console.log("arr1:", arr1);
console.log("arr2:", arr2);

// Output:
// arr1: [100, 20, 30]
// arr2: [100, 20, 30]


// Dono alag Array nahi hain

console.log(arr1 === arr2);

// Output:
// true




// MUTABLE vs NON-MUTATING METHODS


// MUTATING METHODS
// Original Array ko CHANGE karte hain

let arr3 = [10, 20, 30];

arr3.push(40);
console.log("push:", arr3);

arr3.pop();
console.log("pop:", arr3);

arr3.reverse();
console.log("reverse:", arr3);

arr3.sort((a, b) => a - b);
console.log("sort:", arr3);

arr3.splice(1, 1);
console.log("splice:", arr3);


// Common mutating methods:
// push()
// pop()
// shift()
// unshift()
// splice()
// sort()
// reverse()


// NON-MUTATING METHODS
// it's not change origmal arry Usaully gives New Array

let arr4 = [10, 20, 30];

let mapped = arr4.map(value => value * 2);

let filtered = arr4.filter(value => value > 10);

let sliced = arr4.slice(0, 2);

let combined = arr4.concat([40, 50]);

let sorted = arr4.toSorted((a, b) => a - b);

let reversed = arr4.toReversed();

console.log("Original arr4:", arr4);
console.log("map:", mapped);
console.log("filter:", filtered);
console.log("slice:", sliced);
console.log("concat:", combined);
console.log("toSorted:", sorted);
console.log("toReversed:", reversed);





//  CHAINING ARRAY METHODS

// Ek Array method ka result doosre method
// ke directly input ke roop me use karna


let numbers3 = [10, 15, 20, 25, 30, 35];

let result = numbers3
    .filter(value => value > 15)
    .map(value => value * 2);

console.log("Chaining:", result);

// Step 1:
// [10, 15, 20, 25, 30, 35]
//
// filter(value > 15)
//
// [20, 25, 30, 35]
//
// Step 2:
// map(value * 2)
//
// [40, 50, 60, 70]


// Ek aur chaining example

let result2 = numbers3
    .filter(value => value > 10)
    .map(value => value * 2)
    .reduce((total, value) => total + value, 0);

console.log("Chaining 2:", result2);

// Step 1:
// [15, 20, 25, 30, 35]
//
// Step 2:
// [30, 40, 50, 60, 70]
//
// Step 3:
// 30 + 40 + 50 + 60 + 70
//
// Output:
// 180
}