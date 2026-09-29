console.log("Todo list Api");

let taskInput = document.querySelector("#taskInput");
let addBtn = document.querySelector(".addBtn");
let todoContainer = document.querySelector(".todoContainer");


let API = 'https://6aba24635b549d818d6202df.mockapi.io/api/v1/todos' ;

addBtn.addEventListener("click" , PostData)

    

 async function   featchData(){

    let response =  await fetch(API);
    let data =  await response.json();

    if (data){
        todoContainer.innerHTML = '';

        data.forEach( obj  => {
        let div = document.createElement("div");
        div.className = "todo"
        div.innerHTML = `
                    <p>${obj.text}</p>

                <div>
                    <button class="deletbtn">Delete</button>
                    <button>Eidit </button>
                </div> `

        let deletbtn = div.querySelector('.deletbtn')
        deletbtn.addEventListener('click' , function() {
            deleteData(obj.id);
        })

        todoContainer.append(div);

    })

    }
    
    
}

featchData();


async function PostData(){

    let value = taskInput.value;
    
    let objData = {
        text : value.trim()
    }

    let response = await  fetch(API , {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify(objData),
    })

        if(response.status === 201){
            featchData();
        }

}

async  function deleteData(id){
    let response = await fetch(`${API}/${id}` , {
        method : 'DELETE',
    })

    if(response.status === 200){
        featchData()
    }
}