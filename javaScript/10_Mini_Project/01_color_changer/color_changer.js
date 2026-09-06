

let btnRandom = document.querySelector(".btnRandom");
let inputText = document.querySelector("#inputText");
let btnAplly = document.querySelector(".btnAplly");
let currentColorValue = document.querySelector(".currentColorValue");
let container = document.querySelector(".container");

const colorArray = ["red" , "pink" , "yellow" , "black" , "purpule" , "green" , "tomato" , "acqua" , "lightcoral" ,"cyan"];

const genretRandomColor = () => {
        const randomColor = Math.floor(Math.random()*colorArray.length);

        return colorArray[randomColor]
} 

const colorChange = (color) =>{
    container.style.backgroundColor = color;
    currentColorValue.textContent = "color";
}

const handelbtnRandom = (event) =>{
    
   let color =  genretRandomColor();
   colorChange(color);
} 

const handlebtnAplly = (event) => {
    let color =  inputText.value;
    colorChange(color);
}


btnRandom.addEventListener("click" , handelbtnRandom);
btnAplly.addEventListener("click" , handlebtnAplly);




