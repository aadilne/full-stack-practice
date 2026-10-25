import { useState } from "react"

function    UseState(){

    let [count , setCount] = useState(0);

    let [isVisiable , setIsVisiable] = useState(false);     //Toggle text

    let [like , setLike]  =useState(false);         // Like button

    function  change(){
        setCount(count+1);
    }

    return (
        <div className="border rounded bg-blue-700 text-center w-150 h-60 mt-5 mx-60 flex flex-col justify-center items-center gap-5">
            <h1 className="text-2xl">Use State Practice</h1>
            <p>Update add :- {count}</p>
            <button className="border rounded w-30" onClick={change}>click to update</button>

            {/* Toggle Text */}
            <button onClick={() => (setIsVisiable(!isVisiable))}> {isVisiable ? "Hide" : "Show"} Text</button>
            <p className="text-red-500">{isVisiable && "Hide and show text"}</p>


            {/* Liek button */}

            <button onClick={() => setLike(!like)}>{like ? "Liked 💝 " : "Like 🤍 "}</button>


        </div>
    )
}

export default   UseState