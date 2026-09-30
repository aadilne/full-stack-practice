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
                    <p class="paraText" >${obj.text}</p>
                    <input type="text" name="task" id="editInput" value ='${obj.text}' placeholder="Enter your task here |">

                <div>
                    <button class="deletbtn">Delete</button>
                    <button class="editBtn">Edit </button>
                    <button class="saveBtn"> save </button>
                </div> `

        let deletbtn = div.querySelector('.deletbtn');
        let editBtn = div.querySelector('.editBtn');
        let saveBtn = div.querySelector('.saveBtn');
        let paraText = div.querySelector('.paraText');
        let editInput = div.querySelector('#editInput');

        deletbtn.addEventListener('click' , function() {
            deleteData(obj.id);
        })

        editBtn.addEventListener('click' , function(){

            editBtn.style.display = 'none';
            saveBtn.style.display = 'inline';
            paraText.style.display = 'none';
            editInput.style.display = 'inline';
        })

        saveBtn.addEventListener('click' , async function(){

            let editValue = editInput.value;
            await updateData(obj.id , editValue);

            editBtn.style.display = 'inline';
            saveBtn.style.display = 'none';
            paraText.style.display = 'inline';
            editInput.style.display = 'none';
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
            taskInput.value = '';
        }

}

async function updateData(id , value){
    console.log(id , value);

    // let value = taskInput.value;
    
    let objData = {
        text : value.trim()
    }

    let response = await  fetch(`${API}/${id}` , {
        method : 'PUT',
        headers : {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify(objData),
    })

        if(response.status === 200){
            featchData();
            // taskInput.value = '';
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