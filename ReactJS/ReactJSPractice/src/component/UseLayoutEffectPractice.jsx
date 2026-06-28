
import { useState , useLayoutEffect , useRef } from "react";

function  UseLayoutEffectPractice(){
    const boxRef = useRef(null)
    const [height , setHeight] = useState(0);

    useLayoutEffect(() =>{
        setHeight(boxRef.current.clientHeight)
    },[])

    return (
    <div>
        <div ref={boxRef} style={{width:"600px" , padding:"20px" , background:"#eee"}}>
            <h1>UseLayoutEffect Practice Museure Me</h1>
        </div>

        <p>Height : {height}</p>
    </div>
        
    )
}

export default UseLayoutEffectPractice