
// className gives the complete class value.

let heading = document.querySelector("#mainHeading");

console.log(heading.className);

// Output:
// heading


// Change the complete class value.
heading.className = "main-title";

// Now class is:
// main-title


// 56. classList
// classList gives classes as a list.

let messageBox = document.querySelector("#messageBox");

console.log(messageBox.classList);

// Classes:
// text
// large
// bold



// 57. classList.add()
// add() adds a new class.
messageBox.classList.add("highlight");
// text large bold highlight



// 58. classList.remove()
// remove() removes a class.

messageBox.classList.remove("bold");

// Now classes are:
// text large highlight



// 59. classList.toggle()

// toggle() adds the class if it does not exist.
// It removes the class if it already exists.

messageBox.classList.toggle("active");

// "active" does not exist,
// so it will be added.


// Run again:
messageBox.classList.toggle("active");

// Now "active" exists,
// so it will be removed.



// 60. classList.contains()


// contains() checks if a class exists.

console.log(messageBox.classList.contains("text"));
// Output:
// true

console.log(messageBox.classList.contains("bold"));
// Output:
// false



// 61. classList.replace()

// replace() replaces one class with another.

messageBox.classList.replace("large", "small");

// large is removed.
// small is added.



// 62. MULTIPLE CLASSES HANDLE KARNA

// One element can have multiple classes.

console.log(messageBox.classList);

// Example:
// text
// highlight
// small


// Add multiple classes.

messageBox.classList.add("box", "rounded", "shadow");

// Now multiple classes are added.


// Remove multiple classes.

messageBox.classList.remove("rounded", "shadow");



// 63. DYNAMIC CLASS CHANGE

// Dynamic class change means
// changing classes while the program is running.

let changeBtn = document.querySelector("#changeBtn");

changeBtn.addEventListener("click", function () {

    // Toggle the active class on click.
    changeBtn.classList.toggle("active");

});