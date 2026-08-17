
// DOM = Document Object Model
// It lets JavaScript access and change HTML.

// document represents the current webpage.
console.log(document);

// Select the element with id="heading".
let heading = document.getElementById("heading");

// Change the heading text.
heading.innerText = "Hello Nezam";

// window represents the browser window.
console.log(window);

// document is inside window.
console.log(window.document);

// Both refer to the same document.
console.log(window.document === document);
// Output: true

// Select the button.
let btn = document.getElementById("btn");

// Run this code when the button is clicked.
btn.addEventListener("click", function () {

    // Change the heading text.
    heading.innerText = "Button Clicked!";

});


let ts = document.querySelector(".ts")
ts.innerHTML = "changeable text"
console.log(ts);

let btns = document.querySelector("#btns")

btns.addEventListener( "click" , () => {
    ts.innerText = "ts change by btn clicked"
})


// Select all elements with class="text".
let text = document.querySelectorAll(".text");

// Select the second element.
text[1].innerText = "Hello";

// Print the second element.
console.log(text[1]);



// Select the div.
let box = document.querySelector("#box");

// Replace the div's inner content.
box.innerText = "Hello Aadil";


// Find the <h1> inside #box.
let box2 = document.querySelector("#box2 h1");
// heading stores the <h1> element.
console.log(box2);


// Find the <p> inside #box.
let element = document.querySelector("#box3 p");

// element stores the <p>.
console.log(element);


// Select the div.
let box4 = document.querySelector("#box4");

// Get the direct child elements.
console.log(box4.children);
