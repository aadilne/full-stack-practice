{
let a = "22";
let b = 22;
let c = "Aadil22";

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
}



{
    let a = 'JavaScript';
let b = "JavaScript";
let c = `JavaScript`;
let text = "Aadil\'s laptop";



console.log(typeof a); // string
console.log(typeof b); // string
console.log(typeof c); // string
console.log(text);  // Aadil's laptop
}


{
let name = "Aadil";
let age = 22;

console.log(`My name is ${name} and age is ${age}`);
}


// Escape Characters in JavaScript
{

console.log("Hello\nJavaScript");


console.log("Name:\tAadil");


console.log("My name is \"Aadil\"");


console.log('I\'m learning JS');


console.log("C:\\JavaScript");
}


{
    let course = "JavaScript";

console.log(course.length);


let text1 = "";
console.log(text1.length);

let text2 = " ";
console.log(text2.length);

let sname = "Aadil";

console.log(sname.length); // 5
console.log(sname[0]);     // A
console.log(sname[4]);     // l
}


//Charcter Access
{

let language = "JavaScript";

// Accessing characters using index
console.log(language[0]); 

console.log(language[4]);

// Accessing characters using charAt() method
console.log(language.charAt(2));

// Accessing characters using at() method but at() method is accepting negative index also
console.log(language.at(-1));


console.log(language.at(-2));
}

// String Methods
{
let language = "JavaScript is awesome";
// it's returns true and false based on the condition
console.log(language.includes("Script"));


console.log(language.includes("script"));

console.log(language.indexOf("S")); // it's return index if the character is match

console.log(language.startsWith("Java")); // it's returns true and false based on the condition


console.log(language.endsWith("awesome")); // it's return true and false if the string ends matches with the given string or not


console.log(language.indexOf("Python")); // it's return -1 if the character is not match
}


{
let text = "JavaScript is awesome";

console.log(text.slice(0, 4)); // it's returns the part of the string from index 0 to 4


console.log(text.slice(4)); // it's returns the part of the string from index 4 to end


console.log(text.substring(4, 10)); // it's returns the part of the string from index 4 to 10


console.log(text.slice(-1)); // it's returns the last character of the string


console.log(text.slice(-6)); // it's returns the last 6 characters of the string


console.log(text.substring(4, 0)); 
}

{

let text = "JavaScript@123";


console.log(text.toUpperCase());


console.log(text.toLowerCase());


console.log("AaDiL".toUpperCase());


console.log("HELLO WORLD".toLowerCase());
}



{
// Trime() method is use for remov extra space from the string
let text = "   JavaScript is awesome   ";
console.log("|" + text.trim() + "|");


console.log("|" + text.trimStart() + "|");


console.log("|" + text.trimEnd() + "|");
}

//String Replace
{
let text = "Java Java Java";


console.log(text.replace("Java", "JS")); // it's replace only first match


console.log(text.replaceAll("Java", "JS")); // JS JS JS it's replace all the match


console.log("banana".replace("a", "A")); // bAnana it's replace only first match

console.log("banana".replaceAll("a", "A")); // bAnAnA it's replace all the match


console.log("Aadil Nezam".replace(" ", "-")); // Aadil-Nezam it's replace only first match


console.log("Aadil Nezam".replaceAll(" ", "")); // AadilNezam it's replace all the match
}


// split() method is convert string into array based on the given separator
{

console.log("HTML CSS JS".split(" ")); // ["HTML", "CSS", "JS"]


console.log("Apple,Mango,Banana".split(",")); // ["Apple", "Mango", "Banana"]


console.log("Aadil".split("")); // ["A", "a", "d", "i", "l"]


console.log("Aadil".split()); // ["Aadil"]


console.log("HTML-CSS-JS".split("-")); // ["HTML", "CSS", "JS"]


console.log("HTML CSS JS React".split(" ", 2)); // ["HTML", "CSS"] it's returns only first 2 words
}

