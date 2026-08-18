
//   27. innerHTML
//  Element ke andar ka HTML + Text
let box = document.getElementById("box");

console.log(box.innerHTML);


//   28. innerText
// show text in Tag
console.log(box.innerText);




//   29. textContent
//Element ke andar ka text content

console.log(box.textContent);


//   30. innerHTML vs innerText
// show HTML tags + text

console.log("innerHTML:", box.innerHTML);

console.log("innerText:", box.innerText);




//   31. innerText vs textContent


let textBox = document.getElementById("textBox");

console.log("innerText:", textBox.innerText);

console.log("textContent:", textBox.textContent);

/*
    HTML:

    <p>Visible Text</p>

    <p style="display: none;">
        Hidden Text
    </p>


    innerText
        ↓
    Visible Text


    textContent
        ↓
    Visible Text
    Hidden Text

    Kyunki textContent generally
    visibility ko ignore karta hai.
*/



//    32. value
// Input ki current value read karne ke liye:

let username = document.getElementById("username");

console.log(username.value);






//   33. id
let student = document.getElementById("student");

console.log(student.id);



//   34. className

console.log(student.className);  // box container


//   35. tagName
let heading = document.getElementById("heading");

console.log(heading.tagName); // H2




//   36. nodeName
//tagName → H2
//nodeName → H2
console.log(heading.nodeName);




//   37. nodeType
console.log(heading.nodeType);

//   NODE TYPE KE COMMON VALUES

/*
    1 → Element Node
    3 → Text Node
    8 → Comment Node
    9 → Document Node
*/


