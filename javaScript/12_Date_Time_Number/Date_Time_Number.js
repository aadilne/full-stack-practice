
console.log("Date and Time in JavaScript");

// Number ek mathematical value hoti hai.
//
// Examples:
// 10
// 25
// 100
// 3.14
// -50
// 0


// Example:
let age = 22;
let marks = 85;
let price = 99.99;



// 2. JAVASCRIPT ME Number DATA TYPE

// JavaScript me numbers ke liye "number" data type hota hai.
// JavaScript me alag se:
//     int
//     float
// jaisa data type nahi hota.
// Integer aur decimal dono "number" type ke hote hain.

let number1 = 100;
let number2 = 25.50;

console.log(typeof number1); // "number"
console.log(typeof number2); // "number"




// 3. INTEGER AUR DECIMAL NUMBERS

// INTEGER
// Examples:
// 10
// 25
// 100
// -50
// 0

let integerNumber = 100;


// DECIMAL
// Examples:
// 10.5
// 3.14
// 99.99
// -2.5

let decimalNumber = 10.5;


// Important:
// JavaScript me dono ka data type "number" hota hai.

console.log(typeof integerNumber); // number
console.log(typeof decimalNumber); // number


// 4. POSITIVE AUR NEGATIVE NUMBERS

// POSITIVE NUMBER
// 0 se bada number positive hota hai.
// Examples:
// 1
// 10

let positiveNumber = 50;

// NEGATIVE NUMBER
// 0 se chhota number negative hota hai.
// Examples:
// -1
// -10

let negativeNumber = -50;


// 5. 0

// 0 bhi JavaScript me ek valid number hai.
// 0 na positive hai aur na negative.
// Example:

let zero = 0;

console.log(typeof zero); // number


// 0 ka use bahut jagah hota hai.
// Example:
let score = 0;


// 6. NUMBER LITERALS

// Number literal ka simple meaning hai:
// when you write a number directly in your code, it is called a number literal.
// Example:

let a = 100;

// Yahan 100 ek number literal hai.

let b = 25.5;

// Yahan 25.5 bhi number literal hai.

let c = -50;

// Yahan -50 number literal hai.

let d = 0;

// Yahan 0 number literal hai.


// JavaScript automatically in values ko number ke roop me
// treat karta hai.

// 7. SCIENTIFIC NOTATION

// JavaScript me: e  ya E use hota hai.
// Example:
// 5e3
// Iska matlab:
// 5 × 10³    = 5000

let bigNumber = 5e3;

console.log(bigNumber); // 5000


// Ek aur example:

let anotherNumber = 2e4;

// 2 × 10⁴
// = 20000


// Negative exponent bhi use kar sakte hain.
// Example:
// 5e-3
// Iska matlab:
// 5 × 10⁻³
// Result:
// 0.005

let smallNumber = 5e-3;

console.log(smallNumber); // 0.005


// Yaad rakho:
// 5e3  -> 5000
// 5e-3 -> 0.005


// 8. BINARY NUMBERS

// Binary number system me sirf do digits hote hain:  0 or 1
// JavaScript me binary number literal ko likhne ke liye
// number ke aage 0b ya 0B lagate hain.
// Example:

let binaryNumber = 0b1010;


// 0b batata hai ki ye binary number hai.

console.log(binaryNumber); // 10


// Another example:

let binaryNumber2 = 0b1111;

// Binary 1111 = Decimal 15


// 9. OCTAL NUMBERS

// Octal number system me digits hote hain:
// 0 se 7 tak
// Matlab octal me:
// 0, 1, 2, 3, 4, 5, 6, 7
// JavaScript me modern way se octal literal likhne ke liye
// 0o ya 0O use karte hain.
// Example:

let octalNumber = 0o17;


// 0o batata hai ki ye octal number hai.
// Octal:
// 17
// Decimal:
// 15

console.log(octalNumber); // 15


// Another example:

let octalNumber2 = 0o20;

// Octal 20 = Decimal 16


// 10. HEXADECIMAL NUMBERS

// Hexadecimal number system ka base 16 hota hai.
// Isme digits hote hain:
// 0 1 2 3 4 5 6 7 8 9
// Aur A se F:
// A = 10
// B = 11
// C = 12
// D = 13
// E = 14
// F = 15
// JavaScript me hexadecimal number literal ke liye
// 0x ya 0X use karte hain.
// Example:

let hexadecimalNumber = 0xFF;


// 0x batata hai ki ye hexadecimal number hai.
// FF hexadecimal ka decimal value:
// 255

console.log(hexadecimalNumber); // 255


// Another example:

let hexadecimalNumber2 = 0x10;

// Hexadecimal 10 = Decimal 16


// ALL CONCEPTS KO SCREEN PAR SHOW KARNA

// HTML me humne:
// <div id="output"></div>
// banaya tha.
//
// Us element ko JavaScript me select kar rahe hain.

let output = document.querySelector("#output");


// Ab innerHTML ke through examples show kar rahe hain.

output.innerHTML = `

    <div class="example">
        <strong>1. Number:</strong>
        ${age}
    </div>

    <div class="example">
        <strong>2. Number Data Type:</strong>
        ${typeof number1}
    </div>

    <div class="example">
        <strong>3. Integer:</strong>
        ${integerNumber}
    </div>

    <div class="example">
        <strong>3. Decimal:</strong>
        ${decimalNumber}
    </div>

    <div class="example">
        <strong>4. Positive:</strong>
        ${positiveNumber}
    </div>

    <div class="example">
        <strong>4. Negative:</strong>
        ${negativeNumber}
    </div>

    <div class="example">
        <strong>5. Zero:</strong>
        ${zero}
    </div>

    <div class="example">
        <strong>6. Number Literal:</strong>
        ${100}
    </div>

    <div class="example">
        <strong>7. Scientific Notation:</strong>
        5e3 = ${bigNumber}
    </div>

    <div class="example">
        <strong>7. Small Scientific Notation:</strong>
        5e-3 = ${smallNumber}
    </div>

    <div class="example">
        <strong>8. Binary:</strong>
        0b1010 = ${binaryNumber}
    </div>

    <div class="example">
        <strong>9. Octal:</strong>
        0o17 = ${octalNumber}
    </div>

    <div class="example">
        <strong>10. Hexadecimal:</strong>
        0xFF = ${hexadecimalNumber}
    </div>
`;