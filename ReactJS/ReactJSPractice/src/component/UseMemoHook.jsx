
import { useState , useMemo } from "react"


function UseMemoHook(){
    const [count , setCount] = useState(0);
    const [text , setText] = useState("")
    
    const expensiveCalculation= (num) =>{
        console.log("Expensive claclutaion print");

            let total =0;
            for(let i =0; i<1000000; i++){
                total += i;
        }

        return total + num
    }

    const result = useMemo(() =>expensiveCalculation(count) , [count]);


    return (
        <>
        <h1>Practice use Memo Hook</h1>
        <h2>Result :{result}</h2>
        <button onClick={() => setCount(count + 1)}>Increse count</button>
        <input type=" text" value={text}  onChange={(e) => setText(e.target.value)}/>
        <p>Count : {count}</p>
        
        </>
    )
}

export default UseMemoHook