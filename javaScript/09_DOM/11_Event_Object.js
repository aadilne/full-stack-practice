
// 156. EVENT OBJECT

// The event object contains information
// about the event that happened.

let childBtn = document.querySelector("#childBtn");

childBtn.addEventListener("click", (event) => {

    console.log(event);

});


// 157. event.target

// event.target tells us
// where the event actually happened.

childBtn.addEventListener("click", (event) => {

    console.log("Target:", event.target);

});


// 158. event.currentTarget

// event.currentTarget tells us
// where the event listener is attached.

childBtn.addEventListener("click", (event) => {

    console.log("Current Target:", event.currentTarget);

});


// 159. event.type

// event.type tells us
// the name of the event.

childBtn.addEventListener("click", (event) => {

    console.log("Event Type:", event.type);

});


// 160. event.preventDefault()

// preventDefault() stops the browser's
// default action.

let myLink = document.querySelector("#myLink");

myLink.addEventListener("click", (event) => {

    event.preventDefault();

    console.log("Link clicked");

});


// 161. event.stopPropagation()

// stopPropagation() stops the event
// from moving to parent elements.

let parentBox = document.querySelector("#parentBox");

parentBox.addEventListener("click", () => {

    console.log("Parent Box clicked");

});

childBtn.addEventListener("click", (event) => {

    event.stopPropagation();

    console.log("Child Button clicked");

});


// 162. event.defaultPrevented

// defaultPrevented tells us whether
// preventDefault() was used.

myLink.addEventListener("click", (event) => {

    event.preventDefault();

    console.log("Default prevented:",event.defaultPrevented);

});


// 163. event.clientX

// clientX gives the mouse X position
// inside the browser window.

let mouseBox = document.querySelector("#mouseBox");

mouseBox.addEventListener("mousemove", (event) => {

    console.log("Mouse X:", event.clientX);

});


// 164. event.clientY

// clientY gives the mouse Y position
// inside the browser window.

mouseBox.addEventListener("mousemove", (event) => {

    console.log("Mouse Y:", event.clientY);

});


// 165. event.key

// event.key tells us
// which keyboard key was pressed.

let keyInput = document.querySelector("#keyInput");

keyInput.addEventListener("keydown", (event) => {

    console.log("Key:", event.key);

});


// 166. event.code

// event.code tells us
// the physical key name.

keyInput.addEventListener("keydown", (event) => {

    console.log("Code:", event.code);

});


// 167. target vs currentTarget

// target = where the event actually happened.
// currentTarget = where the listener is attached.

parentBox.addEventListener("click", (event) => {

    console.log("Target:", event.target);

    console.log("Current Target:",event.currentTarget);

});