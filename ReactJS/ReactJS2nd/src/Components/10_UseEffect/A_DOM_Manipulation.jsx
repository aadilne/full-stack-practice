import { useEffect , useState}  from "react"

function A_DOM_Manipulation(){

    let [count , setCount] = useState(0);

    useEffect(()=>{
        document.title =`Count:- ${count}`;

        console.log("useEffect called");
    },[count])

    return(
        <div>
            <p>Count:- {count}</p>
            <button onClick={() => setCount(count + 1)}>increase</button>

        </div>
    )
}

export default A_DOM_Manipulation