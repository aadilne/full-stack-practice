
import { useContext } from "react"
import { AuthContext } from "./D_AuthContext"

const D_ChildAuthContext = () => {
    const {isLoggedIn , login , logout} = useContext(AuthContext);
    
    return(
        <nav>
            {isLoggedIn ? (<button onClick={logout}>Logout</button>) : (<button onClick={login}>Login</button>)}
        </nav>
    )
}

export default D_ChildAuthContext