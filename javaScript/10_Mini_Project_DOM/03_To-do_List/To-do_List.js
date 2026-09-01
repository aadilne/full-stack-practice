
let listContainer = document.querySelector(".listContainer");

let addInput = document.querySelector("#addInput");
let addBtn = document.querySelector(".addBtn");


let list = [ 

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
    listContainer.innerHTML = "";
    arr.map((obj) =>{

    let divEle = document.createElement("div");
    divEle.classList.add("list");
    divEle.innerHTML = `
            <p>${obj.text}</p>`

            let buttonElem = document.createElement("button");
            buttonElem.classList.add("deletBtn");
            buttonElem.innerText = "❌";
            divEle.append(buttonElem);
            buttonElem.onclick = () =>{
                handelRemoveList(obj.id);

            }
            listContainer.append(divEle);
        })

}

randerList(list);

function handelAddList (){
    let obj = {
        id : Date.now(),
        text : addInput.value
    }

    list.unshift(obj);
    randerList(list);
    addInput.value = "";
}

function handelRemoveList (id){
    let a = list.fillter((obj) => {
        return obj.id !== id;
    })

     list = a;
renderList(list);
    console.log(id);

}

addBtn.addEventListener("click" , handelAddList);