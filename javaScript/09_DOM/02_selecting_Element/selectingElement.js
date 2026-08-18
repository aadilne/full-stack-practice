
   //DOM Selecting Elements


//   1. getElementById()

let heading = document.getElementById("mainHeading");

console.log(heading);

heading.textContent = "JavaScript DOM";



//2. getElementsByClassName()

let paragraphs = document.getElementsByClassName("text");

console.log(paragraphs);

// First element:
console.log(paragraphs[0]);

// Second element:
console.log(paragraphs[1]);

// Third element:
console.log(paragraphs[2]);


// Saare elements par loop:

for (let i = 0; i < paragraphs.length; i++) {
    console.log(paragraphs[i]);
}



  // 3. getElementsByTagName()



let allParagraphs = document.getElementsByTagName("p");

console.log(allParagraphs);

// Example:

console.log(allParagraphs[0]);
console.log(allParagraphs[1]);



// 4. getElementsByName()



let users = document.getElementsByName("username");

console.log(users);


// First input:

console.log(users[0]);


// Second input:

console.log(users[1]);


//5. querySelector()

// ID selector:

let firstHeading = document.querySelector("#mainHeading");

console.log(firstHeading);


//6. querySelectorAll()


let boxes = document.querySelectorAll(".box");

console.log(boxes);


//7. CSS Selector ke through element select karna



//8. ID Selector → #id


let idElement = document.querySelector("#mainHeading");

console.log(idElement);


//9. Class Selector → .class


// Only FIRST .box:

let firstBox = document.querySelector(".box");

console.log(firstBox);


// All .box:

let allBoxes = document.querySelectorAll(".box");

console.log(allBoxes);



//10. Tag Selector → p

let pElement = document.querySelector("p");

console.log(pElement);

let allP = document.querySelectorAll("p");

console.log(allP);


// 11. Attribute Selector → [type="text"]

    // Jis element ka type attribute
    // "text" hai, usko select karo.


let textInput = document.querySelector('[type="text"]');

console.log(textInput);


//12. Multiple Selectors


let multiple = document.querySelectorAll(
    "#mainHeading, .box"
);

console.log(multiple);
//13. querySelector() vs querySelectorAll()
//FIRST matching element

let oneBox = document.querySelector(".box");

console.log(oneBox);


let everyBox = document.querySelectorAll(".box");

console.log(everyBox);

//14. HTMLCollection kya hai?


let classElements = document.getElementsByClassName("box");

console.log(classElements);

console.log(classElements.constructor.name);



//15. NodeList kya hai?

// querySelectorAll() ka result NodeList hota hai.



let nodeElements = document.querySelectorAll(".box");

console.log(nodeElements);


console.log(nodeElements.constructor.name);




// extra selector type
{
    document.querySelectorAll("#title, .text");
// Multiple selectors


document.querySelectorAll("#parent p");
// Parent ke andar koi bhi <p>


document.querySelectorAll("#parent > p");
// Parent ke direct <p> children


document.querySelector("#title + #ctitle");
// title ke immediately next sibling


document.querySelectorAll("#title ~ #cp");
// title ke baad wale siblings
}