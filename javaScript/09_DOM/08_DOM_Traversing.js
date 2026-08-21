
// PART 11: DOM TRAVERSING
// 99. Parent element
// Parent is the element that contains another element.
let heading = document.querySelector("#heading");

console.log(heading.parentElement);


// 100. parentElement
// parentElement gives the parent HTML element.
let parent = document.querySelector("#parent");

console.log(parent.parentElement);



// parentNode
// parentNode gives the parent node.
// Usually it gives the same parent element.
console.log(parent.parentNode);


// Child element
// A child is an element inside another element.
let childBox = document.querySelector("#childBox");

console.log(childBox);



// children
// children gives only HTML element children.
console.log(parent.children);



// childNodes
// childNodes gives all child nodes.
// It can include text and comments.
console.log(parent.childNodes);



// firstElementChild
// Gives the first HTML element child.
console.log(parent.firstElementChild);


// lastElementChild
// Gives the last HTML element child.
console.log(parent.lastElementChild);


// firstChild
// Gives the first child node.
// It can be a text node.
console.log(parent.firstChild);


// lastChild
// Gives the last child node.
// It can be a text node.
console.log(parent.lastChild);


// nextElementSibling
// Gives the next HTML element at the same level.
let firstPara = document.querySelector("#firstPara");
console.log(firstPara.nextElementSibling);


// previousElementSibling
// Gives the previous HTML element at the same level.
let secondPara = document.querySelector("#secondPara");

console.log(secondPara.previousElementSibling);


// nextSibling
// Gives the next node.
// It can be a text node.
console.log(firstPara.nextSibling);


// previousSibling
// Gives the previous node.
// It can be a text node.
console.log(secondPara.previousSibling);


// closest()
// closest() finds the nearest matching parent element.
let box = document.querySelector("#childBox");

console.log(box.closest("#parent"));


// matches()
// matches() checks if an element matches a CSS selector.
// It returns true or false.
console.log(box.matches("#childBox"));

console.log(box.matches(".box"));


// contains()
// contains() checks if one element contains another element.
// It returns true or false.
console.log(parent.contains(childBox));


// Parent → Child
// Go from an element to its parent and then to its child.
let currentElement = document.querySelector("#secondPara");

console.log(currentElement.parentElement);

console.log(currentElement.parentElement.children);


// Parent → Child → Sibling
// Move through parent, child and sibling.
let para = document.querySelector("#secondPara");

// Go to parent.
let paraParent = para.parentElement;

// Go to first child.
let firstChildElement = paraParent.firstElementChild;

// Go to next sibling.
let nextSiblingElement = para.nextElementSibling;

console.log(paraParent);
console.log(firstChildElement);
console.log(nextSiblingElement);