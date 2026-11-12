import { useEffect , useState}  from "react"

function A_DOM_Manipulation(){

    let [count , setCount] = useState(0);

    useEffect(()=>{
        document.title =`Count:- ${count}`;

        console.log("useEffect called");
    },[count])

    return(
        <div className="w-100 h-30 mx-35 pl-7  bg-gray-700">
            <h1>useEffect Practice</h1>
            <p>Count:- {count}</p>
            <button onClick={() => setCount(count + 1)}>increase</button>

        </div>
    )
}

export default A_DOM_Manipulation