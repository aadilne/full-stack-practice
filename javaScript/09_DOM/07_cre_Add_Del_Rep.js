
// 74. createElement()

let newElement = document.createElement("div");
console.log(newElement);

// 1. Create a new <div>
let newDiv = document.createElement("div");

// 2. Create a new <p>
let newPara = document.createElement("p");

// 3. Create a new <li>
let newLi = document.createElement("li");

// 4. Create a new <button>
let newButton = document.createElement("button");


// 5. Add text to a created element
// innerText adds normal text.
newDiv.innerText = "Hello Aadil";


// 6. Add HTML to a created element
// innerHTML can add HTML tags.
newPara.innerHTML = `
    <strong>Hello Aadil</strong>
    <span> - I am learning DOM</span>
`;


// 7. Add attributes to a created element
// setAttribute() adds an attribute.
let image = document.createElement("img");

image.setAttribute("src", "photo.jpg");
image.setAttribute("alt", "My Photo");


// 8. Add classes to a created element
// classList.add() adds CSS classes.

newDiv.classList.add("createdDiv");

newLi.classList.add("createdLi");

newButton.classList.add("createdButton");


// PART 9: ADDING ELEMENTS


// 83. append()
// append() adds an element at the end.

let container = document.querySelector("#container");

container.append(newDiv);      // newDiv is already created line no.8

// appendChild()
// appendChild() adds one child at the end.
container.appendChild(newPara);


// prepend()
// prepend() adds an element at the beginning.
let firstText = document.createElement("p");

firstText.innerText = "I am first";

container.prepend(firstText);


// before()
// before() adds an element before another element.

let beforeText = document.createElement("p");

beforeText.innerText = "I am before container";

container.before(beforeText);


// after()
// after() adds an element after another element.

let afterText = document.createElement("p");

afterText.innerText = "I am after container";

container.after(afterText);


// ------------------------------------------------------
// append() vs appendChild()
// append() can add multiple things.
// appendChild() adds one Node/element.


let item1 = document.createElement("p");
item1.innerText = "Item 1";

let item2 = document.createElement("p");
item2.innerText = "Item 2";

// append() can add multiple elements.
container.append(item1, item2);

// appendChild() adds one element.
let item3 = document.createElement("p");
item3.innerText = "Item 3";

container.appendChild(item3);


// ------------------------------------------------------
// Existing element ko move karna
// An existing element moves to a new place.
// ------------------------------------------------------

let box1 = document.querySelector("#box1");

let box2 = document.querySelector("#box2");

// Move box1 inside box2.
box2.append(box1);



// Multiple elements add karna
// append() can add many elements together.

let text1 = document.createElement("p");
text1.innerText = "Text 1";

let text2 = document.createElement("p");
text2.innerText = "Text 2";

let text3 = document.createElement("p");
text3.innerText = "Text 3";

container.append(text1, text2, text3);


// ------------------------------------------------------
// Dynamic list banana
// Create <li> from array data.
// ------------------------------------------------------

let list = document.querySelector("#list");

let fruits = ["Apple", "Mango", "Banana"];

fruits.forEach( (fruit) => {

    // Create a new li.
    let li = document.createElement("li");

    // Add fruit name.
    li.innerText = fruit;

    // Add li to ul.
    list.append(li);
});


// PART 10: DELETE / REPLACE ELEMENTS

// 92. remove()
// remove() removes the selected element itself.
// ------------------------------------------------------

let removeText = document.querySelector("#removeText");

removeText.remove();


// ------------------------------------------------------
// removeChild()
// removeChild() removes a child from its parent.
// ------------------------------------------------------

let parent = document.querySelector("#parent");

let child = document.querySelector("#child");

parent.removeChild(child);


// ------------------------------------------------------
// replaceWith()
// replaceWith() replaces the selected element.
// ------------------------------------------------------

let oldElement = document.querySelector("#oldElement");

let newElement2 = document.createElement("h2");

newElement2.innerText = "New Element";

newElement2.classList.add("newElement");

// Replace old element with new element.
oldElement.replaceWith(newElement2);



// replaceChild()
// Parent replaces one child with another child.


let replaceParent = document.querySelector("#replaceParent");

let oldChild = document.querySelector("#oldChild");

let newChild = document.createElement("h2");

newChild.innerText = "New Child";

// Replace old child with new child.
replaceParent.replaceChild(newChild, oldChild);



// remove() vs removeChild()
// remove() -> element removes itself.
// removeChild() -> parent removes its child.


// ------------------------------------------------------
// Existing element replace karna
// replaceWith() replaces an existing element.
// ------------------------------------------------------

let existingElement = document.createElement("p");

existingElement.innerText = "Existing Element";

container.append(existingElement);

let replacement = document.createElement("h3");

replacement.innerText = "Replacement Element";

// Replace existing element.
existingElement.replaceWith(replacement);



// Parent se child remove karna
// Parent removes its child.

let newParent = document.createElement("div");

let newChildElement = document.createElement("p");

newChildElement.innerText = "Child";

newParent.append(newChildElement);

container.append(newParent);

// Parent removes the child.
newParent.removeChild(newChildElement);