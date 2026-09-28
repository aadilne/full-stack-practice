console.log("Todo list Api");

let taskInput = document.querySelector("#taskInput");
let addBtn = document.querySelector(".addBtn");
let todoContainer = document.querySelector(".todoContainer");


let API = 'https://6aba24635b549d818d6202df.mockapi.io/api/v1/todos' ;

addBtn.addEventListener("click" , function(){

    let value = taskInput.value;
    console.log(value);
})

 async function   featchData(){

    let response =  await fetch(API);
    let data =  await response.json();

    data.forEach( obj  => {
        let div = document.createElement("div");
        div.className = "todo"
        div.innerHTML = `
                    <p>${obj.text}</p>

                <div>
                    <button>Delete</button>
                    <button>Eidit </button>
                </div> `

        todoContainer.append(div);

    })
    
    
}

featchData();


async function PostData(){

    let response = await  fetch(API , {
        method : 'POST',
        headers : {
            'Content-Type' :'application/json',
        },
        body : 'asdf'
    })

    let data = await response.json();
}

