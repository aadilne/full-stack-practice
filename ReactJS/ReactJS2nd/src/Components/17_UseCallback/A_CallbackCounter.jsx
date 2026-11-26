
import { useState , useCallback } from "react"

function A_CallbackCounter() {

    const [count , setCount] = useState(0);

    // yaha pr callback hook function ko yyad rkhta hai uar useMemo value ko yaa rkhta hai.
    const callBackIncresement = useCallback(() => {
        setCount((prev) => prev+1)
    } , [])
    

  return (
    <div>
        <h1>useCallback counter</h1>
        <p>Count {count}</p>
        <button onClick={callBackIncresement}>increse btn</button>

    </div>
  )
}

export default A_CallbackCounter