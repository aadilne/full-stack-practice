
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