
import { useState } from "react";


// Prop Driling
function   Parent(){
    const userName = "Aadil";
    return (
        <>
        <h2>Prop  Driling State Lifting Shared State</h2>
        <Child name={userName} />
        
        </>
    )
}

function  Child({name}){

    return(<>
    <GrandChild name ={name} />
    </>
    )
}


function GrandChild(prop){


    return (<>
    <h3> My name is {prop.name}</h3>
    </>)
}



// Prop Liftin

function   ParentTwo(){
    
    const [text , setText] =useState("");
    return (
        <>
       <InputBoxChild onChange={setText} />
       < Display value ={text} />
        </>
    )
}


function  InputBoxChild({onChange}){

    return(
    <>
    <input type="text" onChange={(e) => onChange(e.target.value)} />
    </>
    )
}


// Share State 
function Display({value}){

    return (
        <>
        <h3>Typed: {value}</h3>
        </>
    )
}



function  PropDrilingStateLiftingSharedState(){

    return (
        <>
        <Parent/>
        <ParentTwo />
        </>
    )
}

export default PropDrilingStateLiftingSharedState