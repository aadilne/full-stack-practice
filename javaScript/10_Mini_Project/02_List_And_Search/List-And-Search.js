
let userContainer = document.querySelector(".userContainer");
let searchInput = document.querySelector("#searchInput");



const users =[
    {
        profileUrl : "https://images.news18.com/ibnlive/uploads/2017/12/Salman-Khan6.jpg",
        name : "Salman Khan",
        email : "salmankahn@gmail.com"
    },

     {
        profileUrl : "https://upload.wikimedia.org/wikipedia/commons/6/6e/Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
        name : "Sarukh Khan",
        email : "Sarukhkahn@gmail.com"
    },

     {
        profileUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgSZ8TS1uLxLCNkHxpea7e1IasdfJF51KenXsOdtKf7Q&s=10",
        name : "Amir Khan",
        email : "Amirkahn@gmail.com"
    }
]

function randerUsers(arr){
    userContainer.innerHTML = '';

   arr.map((item) =>{

    let {profileUrl , name , email} = item;
    
    let divElement = document.createElement("div");
    divElement.className = "userItem";
    divElement.innerHTML = `<div class="image">
                <img src="${profileUrl}" alt="error loding image">
                </div>

                <div class="userDetails">
                    <h3>${name}</h3>
                    <p>${email}</p>
                </div>`

            userContainer.append(divElement); 
}) 
}

randerUsers(users)

users.map((item) =>{

    let {profileUrl , name , email} = item;
    
    let divElement = document.createElement("div");
    divElement.className = "userItem";
    divElement.innerHTML = `<div class="image">
                <img src="${profileUrl}" alt="error loding image">
                </div>

            <div class="userDetails">
                <h3>${name}</h3>
                <p>${email}</p>
    </div>`

            userContainer.append(divElement); 
})


function handelSearch(event){
    let searchValue = event.target.value;
    let filterUsers = users.filter((obj) => {
        return (
        obj.name.toLowerCase().includes(searchValue.toLowerCase())  ||
        obj.email.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
        )
    })

    randerUsers(filterUsers)

}

 searchInput.addEventListener("input" ,handelSearch); 
