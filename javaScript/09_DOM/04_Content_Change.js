
//   38. TEXT CHANGE KARNA

let heading = document.getElementById("heading");

heading.innerText = "New Heading";


//   39. innerText SE CONTENT CHANGE

let message = document.getElementById("message");

message.innerText = "Welcome to JavaScript DOM";


//   40. textContent SE CONTENT CHANGE
let textBox = document.getElementById("textBox");

textBox.textContent = "Content changed using textContent";



//   41. innerHTML SE HTML CHANGE

let box = document.getElementById("box");

box.innerHTML = "<h2>New Heading</h2>";



//   42. HTML KE ANDAR NEW ELEMENT ADD KARNA

box.innerHTML = `
    <h2>JavaScript</h2>
    <p>I am learning DOM</p>
`;




//   43. TEXT vs HTML

let difference = document.getElementById("difference");


/* TEXT */
// only text change inside h2

difference.innerText = "<h2>Hello</h2>";


/* HTML */
// Tag or Element and Text  both are change

difference.innerHTML = "<h2>Hello</h2>";



//  44. innerHTML SECURITY / XSS BASIC CONCEPT

let userContent = document.getElementById("userContent");

let userInput = "<img src=x onerror=alert('XSS')>";

/*
    Agar untrusted/user-provided data ko
    directly innerHTML mein daal diya:

    userContent.innerHTML = userInput;

    to malicious HTML/JavaScript execute hone
    ka risk ho sakta hai.

    Isi concept ko XSS
    (Cross-Site Scripting) kehte hain.
*/


/* SAFE BASIC APPROACH */

userContent.textContent = userInput;

/*
    textContent HTML ko execute nahi karta.

    Isliye userInput ko text ki tarah treat karega.

    Screen par roughly:

    <img src=x onerror=alert('XSS')>

    text ke form mein dikhega.
*/









//   PART 5: DOM ATTRIBUTES


//   45. What is  ATTRIBUTE ?

 //   Attribute provide extra information aout elements
    
//   46. getAttribute()

let profileLinkElement =
    document.getElementById("profileLink");

let profileURL =
    profileLinkElement.getAttribute("href");

console.log(profileURL);


//   47. setAttribute()

let actionButtonElement =
    document.getElementById("actionButton");

actionButtonElement.setAttribute(
    "title",
    "Click this button"
);


//setAttribute() SE EXISTING ATTRIBUTE CHANGE

actionButtonElement.setAttribute(
    "type",
    "submit"
);



//48. removeAttribute()

let lockedInputElement =
    document.getElementById("lockedInput");

lockedInputElement.removeAttribute("disabled");



//   49. hasAttribute()

let checkFieldElement =
    document.getElementById("checkField");

let hasPlaceholder =
    checkFieldElement.hasAttribute("placeholder");  // true

console.log(hasPlaceholder);

