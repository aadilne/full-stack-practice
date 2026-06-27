import { useState , useCallback } from "react"


function  UseCallbackHook(){

    const [count , setCount] = useState(0);

    const increment = useCallback( () => {
        setCount((prev) => prev+1) 
    })

    
    return (
        <>
        <h1>Practice useCallback Hook</h1>

        <h2>Count : {count}</h2>
        <button onClick={increment}>increse</button>
        
        </>
    )
}

export default UseCallbackHook