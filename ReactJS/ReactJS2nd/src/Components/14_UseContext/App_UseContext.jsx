
import A_SingleValue from "./A_SingleValue"
import B_MultipuleValue from "./B_MultipuleValue"
import C_TheamColor from "./C_TheamColor"
import D_ChildAuthContext from "./D_ChildAuthContext"
import { AuthProvider } from "./D_AuthContext"

function   App_UseContext(){

    return(
        <div>
            
            <A_SingleValue />

            <B_MultipuleValue />

            <C_TheamColor />

            <AuthProvider>
             <D_ChildAuthContext /> 
            </ AuthProvider>

        </div>
    )

}

export default App_UseContext