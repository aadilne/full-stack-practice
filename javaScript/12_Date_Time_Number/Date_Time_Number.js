
console.log("Date and Time in JavaScript");

// Number ek mathematical value hoti hai.
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
// JavaScript me alag se: int or float jaisa data type nahi hota.
// Integer aur decimal dono "number" type ke hote hain.

let number1 = 100;
let number2 = 25.50;

console.log(typeof number1); // "number"
console.log(typeof number2); // "number"




// 3. INTEGER AUR DECIMAL NUMBERS

let integerNumber = 100;

let decimalNumber = 10.5;

// Important: JavaScript me dono ka data type "number" hota hai.

console.log(typeof integerNumber); // number
console.log(typeof decimalNumber); // number


// 4. POSITIVE AUR NEGATIVE NUMBERS

let positiveNumber = 50;

let negativeNumber = -50;

// 0 bhi JavaScript me ek valid number hai.
// 0 na positive hai aur na negative.

let zero = 0;

console.log(typeof zero); // number


// 0 ka use bahut jagah hota hai.

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
// 5e3
// Iska matlab: 5 × 10³    = 5000

let bigNumber = 5e3;

console.log(bigNumber); // 5000


// Ek aur example:

let anotherNumber = 2e4;


// Negative exponent bhi use kar sakte hain.
// 5e-3
// 5 × 10⁻³
// 0.005

let smallNumber = 5e-3;

console.log(smallNumber); // 0.005


// Yaad rakho:
// 5e3  -> 5000
// 5e-3 -> 0.005


// 8. BINARY NUMBERS

// Binary number system me sirf do digits hote hain:  0 or 1
// number ke aage 0b ya 0B lagate hain.
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

let hexadecimalNumber = 0xFF;


// 0x batata hai ki ye hexadecimal number hai.
// FF hexadecimal ka decimal value:
// 255

console.log(hexadecimalNumber); // 255


// Another example:

let hexadecimalNumber2 = 0x10;

// Hexadecimal 10 = Decimal 16

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



// NUMBER CONVERSION


// ______________________________________
// 11. STRING → NUMBER

// "100" ek String hai.

let conversionStringValue = "100";

console.log(typeof conversionStringValue); // string


// Number() se String ko Number me convert kar sakte hain.

let conversionNumberValue = Number(conversionStringValue);

console.log(conversionNumberValue); // 100

console.log(typeof conversionNumberValue);// number


// 12. NUMBER → STRING

let conversionOriginalNumber = 500;

// String() se Number ko String bana sakte hain.

let conversionStringResult = String(conversionOriginalNumber);

console.log(conversionStringResult); // "500"

console.log(typeof conversionStringResult); // string



// 13. Number()

// Number() kisi value ko Number me convert karta hai.

console.log(Number("50")); // 50

console.log(Number("10.5")); // 10.5

console.log(Number("hello")); // NaN


// Empty String ko Number() 0 bana deta hai.

console.log(Number("")); // 0



// 14. parseInt()
// parseInt() INTEGER number deta hai. Decimal part hata deta hai.

console.log(parseInt("25.99")); // 25


// String ke start me number ho,
// to parseInt() number nikal sakta hai.

console.log(parseInt("100px")); // 100



// 15. parseFloat()

// parseFloat() decimal number ko bhi rakhta hai.

console.log(parseFloat("25.99")); // 25.99


// String ke start me number ho, to parseFloat() number nikal sakta hai.

console.log(parseFloat("20.50px")); // 20.5



// 16. UNARY +

// String ke aage + lagane se String Number me convert ho sakti hai.

let unaryConversionText = "200";

let unaryConversionResult = +unaryConversionText;

console.log(unaryConversionResult); // 200

console.log(typeof unaryConversionResult); // number



// 17. toString()

// toString() Number ko String banata hai.

let tostringOriginalValue = 300;

let tostringFinalValue = tostringOriginalValue.toString();

console.log(tostringFinalValue); // "300"

console.log(typeof tostringFinalValue); // string



// NUMBER CHECKING

// 18. Number.isInteger()

// Check karta hai ki value INTEGER hai ya nahi.

console.log(Number.isInteger(100)); // true

console.log(Number.isInteger(10.5)); // false



// 19. Number.isFinite()

// Check karta hai ki value normal finite Number hai ya nahi.

console.log(Number.isFinite(100));  // true

console.log(Number.isFinite(Infinity)); // false


// String ko ye automatically Number me convert nahi karta.

console.log(Number.isFinite("100")); // false



// 20. Number.isNaN()

// Check karta hai ki value exactly NaN hai ya nahi.

console.log(Number.isNaN(NaN)); // true

console.log(Number.isNaN(100)); // false

console.log(Number.isNaN("hello")); // false



// 21. isNaN()

// isNaN() pehle value ko Number me convert karne ki koshish karta hai.

console.log(isNaN("hello")); // true

console.log(isNaN("100"));// false

// Difference:

// Number.isNaN("hello") → false
// isNaN("hello")        → true



// 22. isFinite()

// isFinite() value ko Number me convert karke check karta hai ki finite hai ya nahi.

console.log(isFinite(100)); // true

console.log(isFinite("100")); // true


// Number.isFinite("100") → false
// isFinite("100")        → true



// 23. NaN
// NaN ka full form: Not a Number


// Jab valid Number nahi ban pata,
// to result NaN ho sakta hai.

let nanExampleValue = Number("hello");

console.log(nanExampleValue); // NaN


// NaN ka typeof "number" hota hai.

console.log(typeof NaN); // number



// 24. Infinity

// Number ko 0 se divide karne par
// positive Infinity mil sakta hai.

console.log(10 / 0); // Infinity



// 25. -Infinity

// Negative Number ko 0 se divide karne par
// -Infinity mil sakta hai.

console.log(-10 / 0); // -Infinity



// NUMBER METHODS


// 26. toFixed()

// toFixed() decimal places fix karta hai.

let fixedMethodNumber = 10.5678;

console.log(fixedMethodNumber.toFixed(2)); // "10.57"


// 2 ka matlab:  decimal ke baad 2 digits.


console.log(typeof fixedMethodNumber.toFixed(2)); // string

// Important: // toFixed() ka result String hota hai.

// 27. toPrecision()

// toPrecision() total digits ko control karta hai.

let precisionMethodNumber = 123.456;

console.log(precisionMethodNumber.toPrecision(4)); // "123.5"

// Yahan total 4 digits rakhe gaye hain.



// 28. toExponential()

// toExponential() Number ko scientific notation me convert karta hai.

let exponentialMethodNumber = 12345;

console.log(exponentialMethodNumber.toExponential(2)); // "1.23e+4"



// 29. toLocaleString()

// Number ko readable format me dikhata hai.

let localeMethodNumber = 1000000;

console.log(localeMethodNumber.toLocaleString()); // "1,000,000"

// India ke format me:

console.log(localeMethodNumber.toLocaleString("en-IN")); // "10,00,000"



// ============================================================
// 30. valueOf()
// ============================================================

// valueOf() Number ki actual value return karta hai.

let valueofMethodNumber = 500;

console.log(valueofMethodNumber.valueOf()); // 500



// NUMBER PROPERTIES
// 31. Number.MAX_VALUE

// JavaScript ka sabse bada FINITE Number.

console.log(Number.MAX_VALUE);// 1.7976931348623157e+308
// 32. Number.MIN_VALUE

// JavaScript ka sabse chhota FINITE Number.

console.log(Number.MIN_VALUE);// 5e-324


// 33. Number.MAX_SAFE_INTEGER

// Sabse bada SAFE INTEGER.

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991



// 34. Number.MIN_SAFE_INTEGER

// Sabse chhota SAFE INTEGER.

console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991



// 35. Number.POSITIVE_INFINITY

// Positive Infinity ki property.

console.log(Number.POSITIVE_INFINITY); // Infinity



// 36. Number.NEGATIVE_INFINITY

// Negative Infinity ki property.

console.log(Number.NEGATIVE_INFINITY); // -Infinity



// 37. Number.NaN

// Number.NaN ki value NaN hoti hai.
console.log(Number.NaN);// NaN

// 38. Number.EPSILON

// EPSILON ek bahut chhoti Number value hai.
// Iska use floating-point comparison me
// precision problem ko handle karne me hota hai.

console.log(Number.EPSILON); 



// IMPORTANT CONCEPTS


// 39. FLOATING-POINT NUMBERS

// Decimal numbers ko Floating-Point Number kaha jata hai.

let floatingConceptNumber = 10.25;

console.log(floatingConceptNumber); // 10.25



// 40. FLOATING-POINT CALCULATION PROBLEMS

// Computer kuch decimal values ko exactly store nahi kar pata. Isliye calculation me kabhi-kabhi unexpected result aa sakta hai.

console.log(0.1 + 0.2); // 0.30000000000000004

// 41. 0.1 + 0.2 PROBLEM

// Mathematics me: // 0.1 + 0.2 = 0.3

// Lekin JavaScript me:

let decimalProblemResult = 0.1 + 0.2;

console.log(decimalProblemResult); // 0.30000000000000004


// Agar hume 2 decimal places chahiye,
// to toFixed() use kar sakte hain.

console.log(decimalProblemResult.toFixed(2)); // "0.30"



// 42. SAFE INTEGERS

// Safe Integer wo Integer hai
// jise JavaScript Number safely represent kar sakta hai.

// Safe range:

console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
 
// Check karne ke liye:

console.log(Number.isSafeInteger(100)); // true

console.log(Number.isSafeInteger(9007199254740992)); // false



// 43. NUMBER PRECISION

// JavaScript Number ki precision limited hoti hai.

// Isliye bahut bade numbers ya
// decimal calculation me problem aa sakti hai.

console.log(0.1 + 0.2); // 0.30000000000000004


// Bahut bade exact Integer ke liye BigInt use kiya ja sakta hai.



// 44. BigInt

// BigInt ka use bahut bade INTEGER numbers ke liye hota hai.
// Number ke end me "n" lagate hain.

let bigintConceptValue = 9007199254740993n;

console.log(bigintConceptValue); // 9007199254740993n


// BigInt ka type:

console.log(typeof bigintConceptValue); // bigint



// 45. BigInt() CONVERSION

// String ko BigInt me convert kar sakte hain.

let bigintConversionText = "9007199254740993";

let bigintConversionResult = BigInt(bigintConversionText);

console.log(bigintConversionResult); // 9007199254740993n


// Normal safe Integer ko bhi BigInt me convert kar sakte hain.

console.log(BigInt(100)); // 100n


// Decimal ko BigInt nahi bana sakte.
// BigInt(10.5)
// Error dega.



// 46. BigInt OPERATORS

// BigInt ke saath:
// +, -, *, /, %
// jaise operators use kar sakte hain.

let bigintOperatorFirst = 20n;
let bigintOperatorSecond = 5n;

console.log(bigintOperatorFirst + bigintOperatorSecond); // 25n

console.log(bigintOperatorFirst - bigintOperatorSecond); // 15n

console.log(bigintOperatorFirst * bigintOperatorSecond); // 100n

console.log(bigintOperatorFirst / bigintOperatorSecond); // 4n

console.log(bigintOperatorFirst % bigintOperatorSecond); // 0n


// BigInt division me decimal part nahi aata.

let bigintDivisionFirst = 10n;
let bigintDivisionSecond = 3n;

console.log(bigintDivisionFirst / bigintDivisionSecond); // 3n



// 47. NUMBER VS BigInt

// Normal Number:

let numberVsBigintNormal = 100;

console.log(typeof numberVsBigintNormal); // number


// BigInt:

let numberVsBigintLarge = 100n;

console.log(typeof numberVsBigintLarge); // bigint


// Dono alag data types hain.


// Number aur BigInt ko directly arithmetic me
// mix nahi kar sakte.

// Example:
// 100 + 100n
// Ye Error dega.


// Same type ke saath calculation karo:

console.log(100 + 100); // 200

console.log(100n + 100n); // 200n


// Comparison me:

console.log(100n === 100); // false
// Kyunki type different hai.


console.log(100n == 100); // true

// == value ko compare karta hai.



// 48. BigInt LIMITATIONS


// 1. BigInt me Decimal nahi hota.

// 10.5n
// Invalid hai.


// 2. Number aur BigInt ko
// direct arithmetic me mix nahi kar sakte.
// 10n + 5
// Error


// 3. BigInt ko decimal calculation ke liye
// use nahi kar sakte.


// 4. BigInt ko Number me convert karte waqt
// bade number ki precision lose ho sakti hai.


// 5. BigInt ka use mainly
// bahut bade INTEGER numbers ke liye hota hai.




// FINAL QUICK REVISION

// String → Number
// Number("100") → 100


// Number → String
// String(100) → "100"


// Integer
// parseInt("10.5") → 10


// Decimal
// parseFloat("10.5") → 10.5


// Unary +
// +"100" → 100


// Integer check
// Number.isInteger(10) → true


// NaN check
// Number.isNaN(NaN) → true


// Finite check
// Number.isFinite(100) → true


// NaN
// Invalid Number result


// Infinity
// 10 / 0 → Infinity


// Decimal places
// (10.567).toFixed(2) → "10.57"


// Safe Integer
// -9007199254740991 se
// 9007199254740991 tak


// BigInt
// 9007199254740993n


// BigInt ka type
// bigint