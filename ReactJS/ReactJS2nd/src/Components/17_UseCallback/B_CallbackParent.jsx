
import B_CallbackChild from "./B_CallbackChild";
import { useState , useCallback } from "react"

function B_CallbackParent() {

    const [count , setCount] = useState(0);

     // yaha pr callback hook function 
    const ParentIncresement = useCallback(() => {
       console.log("Button Clicked");
    } , []) // [] ek bar chlega [count] jb jb count ki value change hogi tb tb ye function chlega aur parent btn pr click krege to automatice B_CallbackChild wala componet re render hoga.
    

  return (
   <div>
        <h1>useCallback counter</h1>
        <p>Count {count}</p>
        <button onClick={() => setCount(count + 1)}>increseParent btn</button>

        <B_CallbackChild click={ParentIncresement} />
        {/* yaha pr prop ke through ParentIncresment ko B_CallbackChild component me send kr rhe hai */}


    </div>
  )
}

export default B_CallbackParent