console.log("Calculator.js loaded successfully!");

let display = document.querySelector(".display");

function appendValue(value) {

    if (display.innerText === "0" || display.innerText === "Error" || display.innerText === "Infinity") {
        display.innerText = value;
        return;
    }

    display.innerText = `${display.innerText}${value}`;
}

function clearDisplay() {

    display.innerText = "0";
}

function calculate(){
    try{
        display.innerText = eval(display.innerText);
    } catch (error) {
        display.innerText = "Error";
    }   
}