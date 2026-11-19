
import { createContext ,  useContext } from "react"

const  UserContext = createContext();

function      A_SingleValue(){

    const user = "AADIL NEZAM";

    return(
        <div>
           <UserContext.Provider value={user}>
            <Parent />
            </UserContext.Provider> 
        </div>
    )
}


function Parent(){

    return(
        <div>

            <Child />
        </div>
    )
}

function  Child(){

    return(
        <div>
            <GrandChild />
        </div>
    )
}

function   GrandChild(){

    const userA = useContext(UserContext)

    return(
        <div>
            <p>useContext with single value</p>
            <p>Single user Name : {userA}</p>
        </div>
    )
}





export default A_SingleValue