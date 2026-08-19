
// 64. change css through javaScript

// Select the heading.
let mainHeading = document.querySelector("#mainHeading");

// Change CSS using JavaScript.
mainHeading.style.color = "red";



// 65. style property


// Select the paragraph.
let messageText = document.querySelector("#messageText");

// style is used to change inline CSS.
messageText.style.color = "orange";


// 66. element.style.color

// Select the heading.
let colorHeading = document.querySelector("#colorHeading");

colorHeading.style.color = "green";   // Change text color.
colorHeading.style.fontSize = "35px";


// 67. element.style.backgroundColor

// Select the box.
let colorBox = document.querySelector("#colorBox");

// Change background color.
colorBox.style.backgroundColor = "yellow";
colorBox.style.backgroundColor = "purpule";


// 68. Multiple CSS properties

// Select the box.
let multiStyleBox = document.querySelector("#multiStyleBox");

// Change multiple CSS properties.
multiStyleBox.style.color = "white";
multiStyleBox.style.backgroundColor = "black";
multiStyleBox.style.fontSize = "25px";
multiStyleBox.style.padding = "20px";
multiStyleBox.style.marginTop = "20px";
multiStyleBox.style.borderRadius = "10px";


// 70. style.cssText
// Select the box.
let cssTextBox = document.querySelector("#cssTextBox");

// Set multiple inline styles at once.
cssTextBox.style.cssText = `
    color: white;
    background-color: purple;
    font-size: 30px;
    padding: 20px;
`;


// 71. getComputedStyle()

// Select the element.
let computedText = document.querySelector("#computedText");

// Get final applied styles.
let styles = getComputedStyle(computedText);

// Read the color.
console.log(styles.color);

// Read the font size.
console.log(styles.fontSize);



// 72. Inline CSS vs CSS class

// Inline CSS directly changes the style.
computedText.style.color = "red";


// CSS class changes styling through a CSS class.
let classBox = document.querySelector("#classBox");


// 73. JavaScript se CSS class add/remove

// Select the button.
let styleBtn = document.querySelector("#styleBtn");

// Add class when button is clicked.
styleBtn.addEventListener("click", () => {

    classBox.classList.toggle("activeBox");

});