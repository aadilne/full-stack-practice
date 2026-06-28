import { useState , useLayoutEffect , useRef } from "react";

function UseLayoutEffectPractice2(){
    const refBox = useRef(null)

    useLayoutEffect(() =>{
        const el = refBox.current

        const width = el.offsetWidth

        el.style.transform =`translateX(${width}px)`

    },[])


    return (
        <div ref={refBox}
        style={{padding:"30px" , background:"#ddd", transition:"6s"}}>
            <h3>Pracitce useLayoutEffect 2</h3>

        </div>
    )
}

export default UseLayoutEffectPractice2