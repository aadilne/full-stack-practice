
import { Im500Px } from "react-icons/im";
import { ImAirplane } from "react-icons/im";

import { MdToys ,MdSmartToy  } from "react-icons/md";

function    React_Icons(){


    return (
        <div className="w-3xl h-50 rounded-2xl border">
            <h1 className="text-center text-6xl bg-amber-400 text-purple-800 rounded-2xl">React Icons</h1>
            
            <div className="w-full h-full flex flex-row  justify-around gap-4 text-4xl mt-5"> 
              
                <Im500Px  /> 

                <p>this is finger print</p>

                <ImAirplane />

                < MdToys/>

                <MdSmartToy />
                
            </div>
           

        </div>
    )
}

export default React_Icons