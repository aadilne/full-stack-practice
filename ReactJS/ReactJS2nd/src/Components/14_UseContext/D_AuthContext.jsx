
import { Children , createContext , useState } from "react"

const AuthContext = createContext();

const AuthProvider = ({Children}) => {

    const [isLoggedIn , setIsLoogedIN] = useState(false);

    const login = () => setIsLoogedIN(true);
    const logOut = () => setIsLoogedIN(false);

    return(
        <AuthContext.Provider value={{isLoggedIn , login , logOut}}>
            {Children}
            
        </AuthContext.Provider>
    )

}

export { AuthProvider , AuthContext}