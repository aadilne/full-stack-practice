import { useState } from "react"

function CounterApp(){

    const [count , setCount] = useState(0);

    const inrement = () =>{
        setCount(count+1)
    }

    const decrement = () => setCount(count-1)

        


    return(
        <>
        <h1>Countter App</h1>

        <p>count : {count}</p>

        <button onClick={inrement}>Increment ➕</button>

        <button onClick={decrement}>Decrement ➖</button>

        <button onClick={() => setCount(0)}>reset 🔃</button>

        </>
    )
}

export default CounterApp