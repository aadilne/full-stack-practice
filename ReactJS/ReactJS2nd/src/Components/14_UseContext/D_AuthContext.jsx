
import { createContext , useState } from "react"

const AuthContext = createContext();

const AuthProvider = ({children}) => {   

    const [isLoggedIn , setIsLoogedIn] = useState(false);

    const login = () => setIsLoogedIn(true);
    const logOut = () => setIsLoogedIn(false);

    return(
        <div>
            <p>Multipules components use This is to be usederstood</p>
        <AuthContext.Provider value={{isLoggedIn , login , logOut}}>
            {children}   
            
        </AuthContext.Provider>

        </div>
    )

}

export { AuthProvider , AuthContext}