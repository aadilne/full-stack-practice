
// PART 12: EVENTS

// 117. What is an Event?
// An event is an action that happens in the browser.


// 118. What is an Event Listener?
// Event listener waits for a specific event. When that event happens, it runs a function.
 


// Get HTML elements
let mouseBox = document.querySelector("#mouseBox");
let mouseResult = document.querySelector("#mouseResult");


// 119. addEventListener()
// addEventListener() attaches an event to an element.
// It tells JavaScript: "When this event happens, run this function."


// 120. click
mouseBox.addEventListener("click", () => {

    // This code runs when the box is clicked.
    mouseResult.textContent = "Click event happened!";
});


// 121. dblclick
mouseBox.addEventListener("dblclick",  () => {

    // This code runs when the box is double clicked.
    mouseResult.textContent = "Double click event happened!";
});


// 122. mousedown
mouseBox.addEventListener("mousedown",  () => {

    // This runs when mouse button is pressed down.
    mouseResult.textContent = "Mouse button is DOWN!";
    
});


// 123. mouseup
mouseBox.addEventListener("mouseup",  () => {

    // This runs when mouse button is released.
    mouseResult.textContent = "Mouse button is UP!";
    
});


// 124. mousemove
mouseBox.addEventListener("mousemove",  () => {

    // This runs when mouse moves inside the box.
    mouseResult.textContent = "Mouse is MOVING!";
});


// 125. mouseenter
mouseBox.addEventListener("mouseenter", () => {

    // This runs when mouse enters the box.
    mouseResult.textContent = "Mouse ENTERED the box!";
});


// 126. mouseleave
mouseBox.addEventListener("mouseleave",  () => {

    // This runs when mouse leaves the box.
    mouseResult.textContent = "Mouse LEFT the box!";
});


// 127. mouseover
mouseBox.addEventListener("mouseover", () => {

    // This runs when mouse moves over the element.
    console.log("mouseover event happened");
});


// 128. mouseout
mouseBox.addEventListener("mouseout",  () => {

    // This runs when mouse moves out of the element.
    console.log("mouseout event happened");
});


// removeEventListener()

// removeEventListener() removes an event listener. We must use the same function reference to remove it.

let buttonResult = document.querySelector("#buttonResult");

// Create a separate function
function buttonClick() {

    // This function will run when button is clicked.
    buttonResult.textContent = "Button click event is ACTIVE!";
}


// Add click event
document.querySelector("#addBtn").addEventListener( "click", function () {

        // Add the buttonClick function as a click listener.
        document.querySelector("#mouseBox").addEventListener("click", buttonClick);
        buttonResult.textContent = "Click event ADDED to mouse box!";
    }
);


// Remove click event
document.querySelector("#removeBtn").addEventListener(
    "click",
    function () {

        // Remove the same function that was added earlier.
        document
            .querySelector("#mouseBox")
            .removeEventListener("click", buttonClick);

        buttonResult.textContent = "Click event REMOVED from mouse box!";
    }
);


// PART 13: KEYBOARD EVENTS


// Get keyboard elements
let keyInput = document.querySelector("#keyInput");
let keyResult = document.querySelector("#keyResult");


// 130. keydown
// keydown runs when a keyboard key is pressed down.
keyInput.addEventListener("keydown",  (event) => {

    // event.key tells us which key was pressed.
    keyResult.textContent = "Key Down: " + event.key;

});


// 131. keyup

// keyup runs when a keyboard key is released.

keyInput.addEventListener("keyup", function (event) {

    // This runs after the key is released.
    console.log("Key Up:", event.key);

});           


// 132. keypress - Legacy Concept

// keypress is an old keyboard event. Modern JavaScript normally uses keydown and keyup.
// So, prefer keydown / keyup in new projects.


// 133. event.key

// event.key tells the actual key value or key name.
// Press A -> "a"
// Press Enter -> "Enter"
// Press Escape -> "Escape"

keyInput.addEventListener("keydown", function (event) {

    console.log("event.key:", event.key);

});


// 134. event.code

// event.code tells the physical key position.
// Press A key -> "KeyA"
// Press Enter -> "Enter"
// Press Space -> "Space"

keyInput.addEventListener("keydown", function (event) {

    console.log("event.code:", event.code);

});


// 135. event.keyCode - Legacy

// keyCode is an old/legacy property.
// It gives a numeric value for the key.
// Modern code should use event.key or event.code.

keyInput.addEventListener("keydown", function (event) {

    console.log("Old keyCode:", event.keyCode);

});


// 136. Keyboard Input Detect Karna
// We can detect what the user types.
keyInput.addEventListener("keydown", function (event) {

    keyResult.textContent =
        "You pressed: " + event.key;

});


// 137. Enter Key Detect Karna
// Check if the pressed key is Enter.

keyInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        keyResult.textContent =
            "ENTER key detected!";

    }

});


// 138. Escape Key Detect Karna
// Check if the pressed key is Escape.

keyInput.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        keyResult.textContent =
            "ESCAPE key detected!";

    }

});


// 139. Specific Keys Detect Karna
// We can check any specific key.

keyInput.addEventListener("keydown", function (event) {

    if (event.key === "a") {

        console.log("A key detected!");

    }

    if (event.key === "ArrowUp") {

        console.log("UP arrow detected!");

    }

    if (event.key === " ") {

        console.log("SPACE key detected!");

    }

});