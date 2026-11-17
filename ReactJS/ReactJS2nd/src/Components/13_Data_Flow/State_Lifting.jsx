import { useState } from "react"


function   Parent(){

    let [text , setText] = useState("");

    return(
        <div>
            <InputBox onChange = {setText} />

            <p>Typed text: {text} </p>
        </div>
    )
}
// yaha pr prop ke through setText ko InputBox me pass kr rhe hai aur input component me onChange me ko reseve kr rhe hai

function InputBox({onChange}){
    return(
        <div>
            <input type="text" placeholder="State Lifting Practice "
            onChange={(e) => onChange(e.target.value)}
            />
        </div>
    )
}


function State_Lifting(){
    return (
        <div>
            <p>State Lifting Practice</p>
            <Parent />
        </div>
    )
}

export default State_Lifting