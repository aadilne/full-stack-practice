
import { useState ,  useMemo } from "react"


function C_WithUseMemo() {

    const [count , setCount ] = useState(0);
    const [text , setText] = useState("");

    const complexCalculation = () => {
        let nub = 0;

        for(let i =0 ; i <= 1000000000; i++){
            nub +=i;
        }
        return nub;
    }

    // let nubResult = complexCalculation();
//Jab text change hoga:- useMemo dobara complexCalculation() ko run karega. text change → useMemo dobara run → 1 billion loop dobara run hoga
// Isliye tumhare current code me input me kuch bhi type karoge to calculation dobara hogi aur input slow ho sakta hai. 
let nubResult = useMemo(() => complexCalculation() , [text]) 
// React component re-render hoga, lekin useMemo apna purana calculation result use karega.

  return (
    <div>
        <p className="text-[23px] text-green-300">With useMemo Hook</p>

        <p>Complex Calculation {nubResult}</p>

        <input type="text" value={text} placeholder="With useMemo"
        onChange={(e) => setText(e.target.value)}
        />

        <p>Counter : {count}</p>
        <button onClick={() => setCount(count+1)}>useMemo Increment</button>

    </div>
  )
}

export default C_WithUseMemo



// [text]	        Initial render aur text change hone par
// [count]	        Initial render aur count change hone par
// []	            Initial render par (normally)
// [text, count]	Dono me se kisi ke change hone par