
import { useContext } from "react"
import { AuthContext } from "./D_AuthContext"

const D_ChildAuthContext = () => {
    
    const {isLoggedIn , login , logOut} = useContext(AuthContext);
    
    return(
        <nav>
            {isLoggedIn ? (<button onClick={logOut}>Logout</button>) : (<button onClick={login}>Login</button>)}
        </nav>
    )
}

export default D_ChildAuthContext