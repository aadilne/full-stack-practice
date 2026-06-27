
import { useState , useEffect, useEffectEvent } from "react"

function  UseEffectEvent(){
    const [count , setCount] = useState(0)

    const onTice = useEffectEvent(() => {
            console.log("Count" , count);
            setCount((c) => c+1)
        })


    useEffect(() =>{

        const id = setInterval(() =>{
            /*    console.log("Conunt" , count);
            setCount((c) => c+1) */

            onTice()

        }, 1000)

        return () => clearInterval(id)

    }, [])

    return (
        <>
        <h1>useEffectEvent Hook </h1>
        <h2>Count :{count}</h2>
        </>
    )
}

export default UseEffectEvent