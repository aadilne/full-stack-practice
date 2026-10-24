

import Props from "./Props";

import Button from "./Button";

function AppProps(){

const hobbies = ["Swimming" , "Cricket" , "Tennis" , "Football"];

function  message(){
    alert("Button call by props")
}

function  message2nd(){
    alert("2nd Button call by props")
}

    return (
        <div>
            <Props name = "Aadil Nezam" age={24} add = "Ara" hobbies = {hobbies} />

            <Props name = "Slaman Khan" age={22}  />

            <Button lable="Click Me" handelClick={message} />

            <Button lable="Click Me 2nd" handelClick={message2nd} />

        </div>
    )
}

export default AppProps