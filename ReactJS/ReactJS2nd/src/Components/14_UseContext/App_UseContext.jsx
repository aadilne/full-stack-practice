
import A_SingleValue from "./A_SingleValue"
import B_MultipuleValue from "./B_MultipuleValue"
import C_TheamColor from "./C_TheamColor"
import D_ChildAuthContext from "./D_ChildAuthContext"
import { AuthProvider } from "./D_AuthContext"

function   App_UseContext(){

    return(
        <div className="w-100 h-70 mx-35 mt-12 flex flex-col items-center justify-center rounded-2xl border border-amber-400" >
            
            <A_SingleValue />

            <B_MultipuleValue />

            <C_TheamColor />
            
            <AuthProvider>
             <D_ChildAuthContext />   {/*yaha pr D_AuthContext ka childre bn jaega*/}
            </ AuthProvider>

        </div>
    )

}

export default App_UseContext