

import { useLayoutEffect ,  useEffect } from "react"

function B_UseLayoutEffect() {

     useEffect(() => {
        console.log("useEffectt Message") // ye component lode hone ke baad chlega
    })

    useLayoutEffect(() =>{
        console.log("useLayoutEffect message") // component lode hone se phle chlega
    })

  return (
    <div>
        <p>random lorem</p>
    </div>
  )
}

export default B_UseLayoutEffect