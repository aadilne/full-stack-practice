
import { createPortal } from "react-dom"



function   PortalTest() {

    // createportal function is define in component return and accpect    two parameter
    return( createPortal(
            <h1>Create Portal Practice Test</h1> ,  document.querySelector("#TestPortal-root")
            
    )  )
}

export default PortalTest