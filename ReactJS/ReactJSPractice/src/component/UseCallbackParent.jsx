
import { useState , useCallback } from "react"
import UseCallbackChild from "./UseCallbackChild";


function    UseCallbackParent(){

     const [count , setCount] = useState(0);

    const handleClick = useCallback( () => {
        console.log("Button Click");
    }, [])

    
    return (
        <>
        <h1>Practice useCallback Hook</h1>

        <h2>Count : {count}</h2>
        <button onClick={() => setCount(count + 1)}>Parent Button</button>

          <UseCallbackChild click ={handleClick} />
        
        </>
    )
}


export default UseCallbackParent