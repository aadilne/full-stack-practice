
let userContainer = document.querySelector(".userContainer");



const arr =[
    {
        profileUrl : "https://images.news18.com/ibnlive/uploads/2017/12/Salman-Khan6.jpg",
        name : "Salman Khan",
        email : "salmankahn@gmail.com"
    },

     {
        profileUrl : "https://images.news18.com/ibnlive/uploads/2017/12/Salman-Khan6.jpg",
        name : "Sarukh Khan",
        email : "salmankahn@gmail.com"
    },

     {
        profileUrl : "https://images.news18.com/ibnlive/uploads/2017/12/Salman-Khan6.jpg",
        name : "Amir Khan",
        email : "salmankahn@gmail.com"
    }
]

arr.map((item) =>{
    
    let divElement = document.createElement("div");
    divElement.className = "userItem";
    divElement.innerHTML = `<div class="image">
                <img src="https://images.news18.com/ibnlive/uploads/2017/12/Salman-Khan6.jpg" alt="error loding image">
                </div>
                <div class="userDetails">
                <h3>salman khan</h3>
                <p>salmankhan@gmail.com</p>
                </div>
            </div>`

            userContainer.append(divElement);
})