import { useState , useEffect } from "react"

function   C_Window_Size_Tracker(){

    let [size , setSize] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () =>{
            setSize(window.innerWidth);
        }

        window.addEventListener("resize" , handleResize);

      
// yaha pr return remove eventListener likhna jruri hai kyu ki useEffet automatice do bar chla jata hai
        return  () => {
            window.removeEventListener("resize" , handleResize);
            console.log("Unsubscribed evet listnener");
        }
    },[])


    return(
        <div className="w-100 h-30 mx-35 pl-7  bg-gray-700">
            <h1>useEffect Practice</h1>
            <h1>Window Size Trcker</h1>
            <p>Window Width {size} px</p>

        </div>
    )
}

export default C_Window_Size_Tracker