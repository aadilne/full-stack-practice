

const hamburger = document.querySelector(".hamburger");
const nameChild = document.querySelector(".nameChild");

hamburger.addEventListener("click", () => {
    // nameChild.style.display = "flex";
    if(nameChild.style.display === "flex"){
        nameChild.style.display = "none";
    } else {
        nameChild.style.display = "flex";
    }
    
});