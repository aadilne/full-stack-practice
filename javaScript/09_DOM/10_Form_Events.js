
// PART 14: FORM EVENTS


// 140. What is a Form?

// A form is used to collect information from the user.
// Example: name, email, gender, course, etc.


// Get the form
let studentForm = document.querySelector("#studentForm");

// Get form elements
let nameInput = document.querySelector("#nameInput");
let terms = document.querySelector("#terms");
let course = document.querySelector("#course");

let inputResult = document.querySelector("#inputResult");
let result = document.querySelector("#result");


// 141. submit event

// submit runs when the form is submitted.

studentForm.addEventListener("submit", (event) => {

    // Prevent the browser's default form submission.
    event.preventDefault();

    console.log("Form submitted");

});


// 142. input event

// input runs whenever the user changes the input value.

nameInput.addEventListener("input", (event) => {

    // Read the current input value.
    inputResult.textContent =
        "You typed: " + event.target.value;

});


// 143. change event

// change runs when the value is changed and the change is confirmed.
// It is commonly used with select, checkbox and radio buttons.

course.addEventListener("change", (event) => {

    console.log("Selected course:", event.target.value);

});


// 144. focus event

// focus runs when an element gets focus.

nameInput.addEventListener("focus", () => {

    console.log("Input is focused");

});


// 145. blur event

// blur runs when an element loses focus.

nameInput.addEventListener("blur", () => {

    console.log("Input lost focus");

});


// 146. focusin event

// focusin runs when an element or its child gets focus.

studentForm.addEventListener("focusin", (event) => {

    console.log("Focus entered:",event.target);

});


// 147. focusout event

// focusout runs when an element or its child loses focus.

studentForm.addEventListener("focusout", (event) => {

    console.log("Focus left:",event.target);

});


// 148. reset event

// reset runs when the form reset button is clicked.

studentForm.addEventListener("reset", () => {

    console.log("Form reset");

});


// 149. preventDefault()

// preventDefault() stops the browser's default action.
// Here it stops the form from refreshing/submitting normally.


// We already used it inside the submit event above.


// 150. Handle Form Submit with JavaScript

// JavaScript can handle the form submission itself.

studentForm.addEventListener("submit", (event) => {

    // Stop the normal browser submission.
    event.preventDefault();

    console.log("JavaScript handled the form");

});


// 151. Read Input Value

// .value gives the current value of an input.

nameInput.addEventListener("input", () => {

    console.log("Name:", nameInput.value);

});


// 152. Basic Form Validation

// Form validation checks whether the user entered
// correct or required information.

studentForm.addEventListener("submit", (event) => {

    event.preventDefault();

    let name = nameInput.value.trim();

    if (name === "") {

        result.textContent = "Please enter your name.";

        return;
    }

    result.textContent = "Name validation successful!";

});


// 153. Handle Checkbox

// Checkbox uses checked to know whether it is selected.

terms.addEventListener("change", () => {

    if (terms.checked) {

        console.log("Terms accepted");

    } else {

        console.log("Terms not accepted");

    }

});


// 154. Handle Radio Button

// Radio buttons use checked to find the selected option.

let genderRadios = document.querySelectorAll('input[name="gender"]');

genderRadios.forEach((radio) => {

    radio.addEventListener("change", () => {

        if (radio.checked) {

            console.log("Gender:",radio.value);

        }

    });

});


// 155. Handle Select Dropdown

// Select dropdown value can be read using .value.

course.addEventListener("change", () => {

    console.log("Course selected:",course.value);

});