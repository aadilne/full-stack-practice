
// MATH CONSTANTS


// 1. Math.PI

// PI ki value lagbhag 3.14159 hoti hai.

let mathPiValue = Math.PI;

console.log(mathPiValue); // 3.141592653589793



// 2. Math.E

// Math.E mathematical constant hai.
// Iski value lagbhag 2.71828 hai.

let mathEValue = Math.E;

console.log(mathEValue);



// 3. Math.SQRT2

// SQRT2 ka matlab:
// √2

let mathSqrtTwoValue = Math.SQRT2;

console.log(mathSqrtTwoValue); // 1.414213562...



// 4. Math.SQRT1_2

// SQRT1_2 ka matlab: √(1/2)
let mathSqrtHalfValue = Math.SQRT1_2;

console.log(mathSqrtHalfValue); //  0.7071



// 5. Math.LN2

// LN2 = natural logarithm of 2

let mathLnTwoValue = Math.LN2;

console.log(mathLnTwoValue);



// 6. Math.LN10

// LN10 = natural logarithm of 10

let mathLnTenValue = Math.LN10;

console.log(mathLnTenValue);



// 7. Math.LOG2E

// LOG2E batata hai:
// log base 2 of E

let mathLogTwoEValue = Math.LOG2E;

console.log(mathLogTwoEValue);   // 1.4426950408889634



// 8. Math.LOG10E

// LOG10E batata hai:
// log base 10 of E

let mathLogTenEValue = Math.LOG10E;

console.log(mathLogTenEValue);



// ROUNDING METHODS


// 9. Math.round()

// Nearest whole number deta hai.

// .5 ya usse upar → upar
// .5 se kam → neeche

console.log(Math.round(10.4)); // 10

console.log(Math.round(10.5)); // 11

console.log(Math.round(10.8)); // 11


// Negative number me bhi rounding hoti hai.

console.log(Math.round(-10.5));
// -10



// 10. Math.floor()

// Floor hamesha number ko neeche le jata hai.

console.log(Math.floor(10.9)); // 10

console.log(Math.floor(10.1)); // 10

console.log(Math.floor(-10.1)); // -11


// Important: Negative number me "neeche" ka matlab aur chhota number hota hai.



// 11. Math.ceil()

// Ceil hamesha number ko upar le jata hai.

console.log(Math.ceil(10.1)); // 11

console.log(Math.ceil(10.9)); // 11

console.log(Math.ceil(-10.9)); // -10



// 12. Math.trunc()

// Decimal part ko simply hata deta hai.

console.log(Math.trunc(10.99)); // 10

console.log(Math.trunc(-10.99)); // -10


// floor aur trunc same nahi hain:

// Math.floor(-10.9) → -11
// Math.trunc(-10.9) → -10



// 13. Math.fround()

// fround() number ko 32-bit floating-point value me convert karta hai.
// Normal JavaScript Number 64-bit floating point hota hai.
// fround() 32-bit precision deta hai.

console.log(Math.fround(10.5)); // 10.5

console.log(Math.fround(0.1)); // 0.10000000149011612


// Iska use mainly special numeric calculations aur 32-bit floating-point data ke saath hota hai.



// ABSOLUTE & SIGN


// 14. Math.abs()

// abs() negative number ka positive value deta hai.


console.log(Math.abs(-50)); // 50

console.log(Math.abs(50)); // 50

console.log(Math.abs(-10.5)); // 10.5



// 15. Math.sign()

// sign() batata hai number positive, negative ya zero hai.


console.log(Math.sign(50)); // 1

console.log(Math.sign(-50)); // -1

console.log(Math.sign(0)); // 0



// MINIMUM & MAXIMUM


// 16. Math.min()

// Sabse chhota number deta hai.

console.log(Math.min(10, 20, 5, 30)); // 5



// 17. Math.max()

// Sabse bada number deta hai.

console.log(Math.max(10, 20, 5, 30)); // 30



// POWER & SQUARE ROOT


// 18. Math.pow()

// pow() power calculate karta hai.
// Math.pow(base, power)

console.log(Math.pow(2, 3));

console.log(Math.pow(5, 2)); // 25



// 19. Math.sqrt()

// sqrt() square root deta hai.

console.log(Math.sqrt(25)); // 5

console.log(Math.sqrt(16)); // 4



// 20. Math.cbrt()

// cbrt() cube root deta hai.

console.log(Math.cbrt(8)); // 2

console.log(Math.cbrt(27)); // 3



// 21. Exponentiation operator **

// ** bhi power calculate karta hai.

console.log(2 ** 3); // 8

console.log(5 ** 2); // 25



// RANDOM NUMBERS
// 22. Math.random()

// Math.random() 0 se lekar 1 se chhota random decimal number deta hai.

// Example:
// 0.25
// 0.73
// 0.91

let mathRandomDecimalValue = Math.random();

console.log(mathRandomDecimalValue);



// 23. Random number between 0 and 1

// Math.random() ka basic range:
// 0 <= number < 1

console.log(Math.random());
// 0 aa sakta hai,
// lekin exactly 1 normally nahi aata.



// 24. Random integer

// Random INTEGER ke liye:
// Math.floor(Math.random() * number)

// Example: 0 se 9 tak random integer

let mathRandomIntegerValue = Math.floor(Math.random() * 10);

console.log(mathRandomIntegerValue); // 0 se 9



// 25. Random number within a range

// 1 se 100 tak random integer:
// Math.floor(Math.random() * (max - min + 1)) + min

let mathRandomRangeMin = 1;
let mathRandomRangeMax = 100;

let mathRandomRangeValue = Math.floor(Math.random() * (mathRandomRangeMax - mathRandomRangeMin + 1)) + mathRandomRangeMin;

console.log(mathRandomRangeValue); // 1 se 100



// 26. Random OTP generation concept

// 6 digit random code ka simple concept:
// 100000 se 999999 tak number generate karo.

let mathOtpValue =
    Math.floor(Math.random() * 900000) + 100000;

console.log(mathOtpValue);
// IMPORTANT:  Math.random() security ke liye strong nahi hai. Real login/security OTP ke liye


// 27. Random color generation

// Hex color me:
// 0-9 aur A-F use hote hain.
//
// # + 6 random hexadecimal characters

let mathRandomColorCharacters =
    "0123456789ABCDEF";

let mathRandomColorValue = "#";


// 6 characters generate kar rahe hain.

for (let mathColorLoopCount = 0; mathColorLoopCount < 6; mathColorLoopCount++) {

    let mathColorRandomIndex = Math.floor( Math.random() * mathRandomColorCharacters.length );

    mathRandomColorValue += mathRandomColorCharacters[mathColorRandomIndex];
}

console.log(mathRandomColorValue);
// Example: #A3F91C



// 28. Random array index

// Array:

let mathRandomArrayItems = [ "Apple", "Mango", "Banana", "Orange" ];


// Array ka last index length - 1 hota hai.


let mathRandomArrayIndex = Math.floor( Math.random() * mathRandomArrayItems.length );


// Random item:

let mathRandomArrayItem = mathRandomArrayItems[mathRandomArrayIndex];

console.log(mathRandomArrayItem);



// LOGARITHMIC METHODS


// 29. Math.log()

// Natural logarithm deta hai.

console.log(Math.log(Math.E)); // 1



// 30. Math.log10()
// Base 10 logarithm.

console.log(Math.log10(100)); // 2


// 31. Math.log2()

// Base 2 logarithm.

console.log(Math.log2(8)); // 3
// 2 × 2 × 2 = 8



// 32. Math.log1p()

// log1p(x) ka matlab:
// log(1 + x)
// Ye bahut chhote x ke liye
// zyada accurate calculation de sakta hai.

console.log(Math.log1p(1)); // log(2)



// EXPONENTIAL METHODS

// 33. Math.exp()

// exp(x) ka matlab:
// e ki power x

console.log(Math.exp(1)); // Math.E ke barabar


console.log(Math.exp(2)); // e²



// 34. Math.expm1()
// expm1(x) ka matlab:
// e^x - 1

console.log(Math.expm1(1));
// e - 1
// Ye small values ke liye useful hota hai.



// TRIGONOMETRY


// IMPORTANT:
// JavaScript ke sin(), cos(), tan() ANGLE ko RADIANS me lete hain.
// 180 degrees = Math.PI radians and 90 degrees  = Math.PI / 2



// 35. Math.sin()

// Sine calculate karta hai.

console.log(Math.sin(Math.PI / 2)); // 1     90° = PI / 2 radians



// 36. Math.cos()

// Cosine calculate karta hai.

console.log(Math.cos(0)); // 1



// 37. Math.tan()
// Tangent calculate karta hai.

console.log(Math.tan(0)); // 0



// 38. Math.asin()

// asin() sine ka inverse hai.
// Result angle RADIANS me deta hai.

console.log(Math.asin(1)); // PI / 2



// 39. Math.acos()

// acos() cosine ka inverse hai.
// Result RADIANS me.

console.log(Math.acos(1));  // 0



// 40. Math.atan()

// atan() tangent ka inverse hai.
// Result RADIANS me.

console.log(Math.atan(1)); // PI / 4



// 41. Math.atan2()

// atan2(y, x) se angle calculate kar sakte hain.
// Ye x aur y dono ko dhyan me rakhta hai.
// Isliye direction/position ke calculation me useful hai.

let mathAtanTwoYValue = 1;
let mathAtanTwoXValue = 1;

let mathAtanTwoResult = Math.atan2(mathAtanTwoYValue, mathAtanTwoXValue );

console.log(mathAtanTwoResult); // PI / 4



// HYPERBOLIC FUNCTIONS


// 42. Math.sinh()

// Hyperbolic sine.

console.log(Math.sinh(1));



// 43. Math.cosh()

// Hyperbolic cosine.

console.log(Math.cosh(1));



// 44. Math.tanh()

// Hyperbolic tangent.

console.log(Math.tanh(1));



// 45. Math.asinh()

// Hyperbolic sine ka inverse.

console.log(Math.asinh(1));



// 46. Math.acosh()

// Hyperbolic cosine ka inverse.

console.log(Math.acosh(1));



// 47. Math.atanh()

// Hyperbolic tangent ka inverse.

console.log(Math.atanh(0.5));



// OTHER MATH METHODS


// 48. Math.hypot()

// hypot() right triangle ki hypotenuse
// calculate karne me useful hai.

// 3² + 4² = 5²

console.log(Math.hypot(3, 4)); // 5


// Multiple values bhi de sakte hain.

console.log(Math.hypot(3, 4, 12)); // 13



// 49. Math.clz32()

// clz32() ka matlab:
// Count Leading Zeros in 32-bit integer.
// Ye number ko 32-bit unsigned integer
// ke form me dekhta hai.

console.log(Math.clz32(1)); // 31


// Kyunki 32-bit representation me
// 1 ke aage 31 zero hote hain.

console.log(Math.clz32(8)); // 28



// 50. Math.imul()

// imul() do numbers ko
// 32-bit integer multiplication ke according multiply karta hai.
// Ye low-level / performance related
// calculations me useful ho sakta hai.

console.log(Math.imul(10, 5)); // 50


// Normal multiplication:
// 10 * 5
// Math.imul():
// Math.imul(10, 5)



// PRACTICAL MATH PROBLEMS


// 51. PERCENTAGE CALCULATION

// Percentage ka formula:
// (part / total) * 100

let mathPercentagePart = 45;
let mathPercentageTotal = 60;

let mathPercentageResult = (mathPercentagePart / mathPercentageTotal) * 100;

console.log(mathPercentageResult); // 75



// 52. AVERAGE CALCULATION

// Average ka formula:
// Sabhi numbers ka total
// ----------------------
// Numbers ki quantity

let mathAverageValueOne = 80;
let mathAverageValueTwo = 70;
let mathAverageValueThree = 90;

let mathAverageResult = ( mathAverageValueOne + mathAverageValueTwo + mathAverageValueThree ) / 3;

console.log(mathAverageResult); // 80



// 53. DISCOUNT CALCULATION

// Maan lo product ka price 1000 hai
// aur discount 20% hai.

let mathDiscountOriginalPrice = 1000;
let mathDiscountPercent = 20;


// Discount amount:

let mathDiscountAmount = (mathDiscountOriginalPrice * mathDiscountPercent ) / 100;

console.log(mathDiscountAmount); // 200


// Final price:

let mathDiscountFinalPrice = mathDiscountOriginalPrice - mathDiscountAmount;

console.log(mathDiscountFinalPrice); // 800



// 54. GST CALCULATION

// Maan lo price = 1000
// GST = 18%

let mathGstOriginalPrice = 1000;
let mathGstPercent = 18;


// GST amount:

let mathGstAmount =(mathGstOriginalPrice * mathGstPercent ) / 100;

console.log(mathGstAmount); // 180


// GST ke baad final price:

let mathGstFinalPrice = mathGstOriginalPrice + mathGstAmount;

console.log(mathGstFinalPrice); // 1180


// 55. AREA CALCULATION

// Rectangle ka area:
// length × width

let mathAreaLength = 10;
let mathAreaWidth = 5;

let mathRectangleArea = mathAreaLength * mathAreaWidth;

console.log(mathRectangleArea); // 50



// Circle ka area:
// PI × radius²

let mathCircleRadius = 7;

let mathCircleArea = Math.PI * Math.pow(mathCircleRadius, 2);

console.log(mathCircleArea);



// 56. DISTANCE CALCULATION

// Do points ke beech distance:
// √((x2-x1)² + (y2-y1)²)
// hypot() se simple kar sakte hain.

let mathDistanceX = 3;
let mathDistanceY = 4;

let mathDistanceResult =Math.hypot(mathDistanceX, mathDistanceY);

console.log(mathDistanceResult); // 5



// 57. RANDOM NUMBER GENERATION

// 1 se 50 tak random integer.

let mathRandomProblemMin = 1;
let mathRandomProblemMax = 50;

let mathRandomProblemResult = Math.floor( Math.random() * (mathRandomProblemMax - mathRandomProblemMin + 1)) + mathRandomProblemMin;

console.log(mathRandomProblemResult);



// 58. DICE SIMULATION

// Dice me 1 se 6 tak values hoti hain.
// Random dice number:

let mathDiceResult = Math.floor(Math.random() * 6) + 1;

console.log(mathDiceResult);
// 1 se 6



// Dice ko baar-baar roll karne ke liye:

for (let mathDiceRollCount = 1; mathDiceRollCount <= 5; mathDiceRollCount++) {

    let mathDiceRandomValue = Math.floor(Math.random() * 6) + 1;

    console.log( "Dice Roll:", mathDiceRandomValue );
}



// 59. OTP / RANDOM CODE CONCEPT

// 4 digit random code:
// 1000 se 9999

let mathRandomCodeResult = Math.floor(Math.random() * 9000) + 1000;

console.log(mathRandomCodeResult);





// 60. MIN / MAX FROM VALUES

// Kuch values hain:

let mathMinMaxValueOne = 45;
let mathMinMaxValueTwo = 12;
let mathMinMaxValueThree = 89;
let mathMinMaxValueFour = 32;


// Sabse chhota:

let mathMinimumResult = Math.min( mathMinMaxValueOne, mathMinMaxValueTwo, mathMinMaxValueThree, mathMinMaxValueFour);

console.log(mathMinimumResult); // 12


// Sabse bada:

let mathMaximumResult = Math.max( mathMinMaxValueOne, mathMinMaxValueTwo, mathMinMaxValueThree, mathMinMaxValueFour);

console.log(mathMaximumResult); // 89


// REVISION

// Math.PI
// Circle ke liye PI


// Math.round()
// Nearest integer


// Math.floor()
// Neeche


// Math.ceil()
// Upar


// Math.trunc()
// Decimal hatao


// Math.abs()
// Negative ko positive value


// Math.sign()
// Positive = 1
// Negative = -1
// Zero = 0


// Math.min()
// Sabse chhota


// Math.max()
// Sabse bada


// Math.pow()
// Power


// Math.sqrt()
// Square root


// Math.cbrt()
// Cube root


// **
// Power operator


// Math.random()
// 0 se 1 ke beech random decimal


// Math.log()
// Natural log


// Math.log10()
// Base 10 log


// Math.log2()
// Base 2 log


// Math.exp()
// e ki power


// Math.sin()
// Sine


// Math.cos()
// Cosine


// Math.tan()
// Tangent


// Math.asin()
// Inverse sine


// Math.acos()
// Inverse cosine


// Math.atan()
// Inverse tangent


// Math.atan2()
// x-y position se angle


// Math.sinh()
// Hyperbolic sine


// Math.cosh()
// Hyperbolic cosine


// Math.tanh()
// Hyperbolic tangent


// Math.hypot()
// Right triangle / distance


// Math.clz32()
// 32-bit leading zeros


// Math.imul()
// 32-bit integer multiplication