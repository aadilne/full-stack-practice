
import { useEffect , useLayoutEffect } from "react"
function  UseLayoutEffect(){

    useEffect(() => {
        console.log(" useEffect Message");
    },[])


    useLayoutEffect(() =>{
        console.log(" useLayoutEffect Message");
    },[])



    return (
        <>
        <h1> Practice use Layout Effect Hook</h1>
        </>
    )
}

export default   UseLayoutEffect