
let listContainer = document.querySelector(".listContainer");

let addInput = document.querySelector("#addInput");
let addBtn = document.querySelector(".addBtn");


const list = [
    {
        id: 123,
        text: "Hello"
    },
    {
        id: 124,
        text: "By"
    },
];

list.map((obj) =>{

    let divEle = document.createElement("div");
    divEle.classList.add("list");
    divEle.innerHTML = `
            <p>${obj.text}</p>
            <button class="deletBtn">❌</button>`

            listContainer.append(divEle);
        })


function randerList (arr){    // this blocek of i have to understand
    arr.map((obj) =>{

    let divEle = document.createElement("div");
    divEle.classList.add("list");
    divEle.innerHTML = `
            <p>${obj.text}</p>
            <button class="deletBtn">❌</button>`

            listContainer.append(divEle);
        })

}

randerList(list);

function handelAddList (){
    console.log("button clicked");
}

addBtn.addEventListener("click" , handelAddList);