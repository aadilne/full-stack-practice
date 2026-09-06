
let greatGrandParent = document.querySelector('.greatGrandParent');
let grandParent = document.querySelector('.grandParent');
let parent = document.querySelector('.parent');
let child = document.querySelector('.child');

greatGrandParent.addEventListener("click" , () => {
    alert("Great Grand Parent Clicked");
});

grandParent.addEventListener("click" , () => {
    alert("Grand Parent Clicked");
});

parent.addEventListener("click" , () => {
    alert("Parent Clicked");
});

child.addEventListener("click" , () => {
    alert("Child Clicked");
})

// capturing phase add true as third parameter in addEventListener
// it's travel from top to bottom greatGrandParent -> grandParent -> parent -> child
/*greatGrandParent.addEventListener("click" , () => {
    alert("Great Grand Parent Clicked");
}, true); */

// bubbling phase add false as third parameter in addEventListener and default is false means nothing in third parameter
// it's travel from  bottom to top     child -> parent -> grandParent -> greatGrandParent
/*greatGrandParent.addEventListener("click" , () => {
    alert("Great Grand Parent Clicked");
}, false); */

// target phase is the last phase and it will be executed after capturing and bubbling phase

greatGrandParent.addEventListener("click" , () => {
    alert("Great Grand Parent Clicked");
} ,true); // target phase is executed after capturing and bubbling phase

grandParent.addEventListener("click" , () => {
    alert("Grand Parent Clicked");
} , true); // target phase is executed after capturing and bubbling phase

parent.addEventListener("click" , () => {
    alert("Parent Clicked");
} , true); // target phase is executed after capturing and bubbling phase

child.addEventListener("click" , () => {
    alert("Child Clicked");
} ,true); // target phase is executed after capturing and bubbling phase




let GrandParentBox = document.querySelector('.GrandParentBox');
let ParentBox = document.querySelector('.ParentBox');
let ChildBox = document.querySelector('.ChildBox');

GrandParentBox.addEventListener("click" , (event) => {
    console.log("Grand Parent Box Clicked");
    console.log(event.target);
    console.log(event.currentTarget);
});

// event.target is the element which is clicked
// event.currentTarget is the element on which the event listener is attached

ParentBox.addEventListener("click" , (event) => {
    console.log("Parent Box Clicked");
    console.log(event.target);  
    console.log(event.currentTarget);
});

ChildBox.addEventListener("click" , (event) => {
    console.log("Child Box Clicked");
    console.log(event.target); 
    console.log(event.currentTarget); 
   // event.stopPropagation(); // stop the event from bubbling up to parent elements
   // event.stopImmediatePropagation(); // stop the event from bubbling up to parent elements and also stop other event listeners on the same element from being called
});



let container = document.querySelector('.container');

// container.childNodes.forEach((elem)=>{

//     elem.addEventListener("click" , () => {
//         console.log(elem.innerText);
//     })
// })

container.addEventListener("click" , (event) => {
    let targetElem = event.target;
    if (targetElem.className === "box"){
        console.log(targetElem.textContent);
    }
})