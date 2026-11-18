
import { createContext ,  useContext } from "react"

const  UserContext = createContext();

function      A_SingleValue(){

    const user = "AADIL NEZAM";

    return(
        <div>

        </div>
    )
}


function Parent(){

    return(
        <div>

        </div>
    )
}

function  Child(){

    return(
        <div>

        </div>
    )
}

function   GrandChild(){

    return(
        <div>

        </div>
    )
}





export default A_SingleValue