
import React from "react";

function    UseCallbackChild({click}){
    console.log("Child Click");



    return (
        <>
        <button onClick={click}>Child Button</button>
        </>
    )
}

export default React.memo(UseCallbackChild) 