import { useState , useEffect ,  useEffectEvent } from "react"

function Auto_Count(){

       let [count ,  setCount] = useState(0);

   const uEV = useEffectEvent(() =>{
         console.log(count); 
            setCount(e => e+1)
    })

    useEffect(() => {
        const interval = setInterval(() =>{
// useEffect ke andr value update nhi hota jb tk dependency na lga le dependency lgane se memory consume ho hai esko fix krne ke liye useEffectEvent aaya.
// console.log(count);  
            uEV();
           
        },5000)

        return () => clearInterval(interval) 
        
    },[])



    return(
        <div>
            <h1 className="text-xl font-bold  text-red-200"> useEffect and useEffectEvent</h1>
            <h1>Auto Count</h1>
            <p>count increase:-  {count}</p>

        </div>
    )
}

export default Auto_Count