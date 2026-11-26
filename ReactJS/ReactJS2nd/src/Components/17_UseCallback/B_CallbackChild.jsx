
import React from "react"
// yaha React ka total library import kr rhe hai

function B_CallbackChild({click}) {

    console.log("Child Render")
  return (
    <div>
        <button onClick={click}>B Child btn</button>
    </div>
  )
}
// React.memo yaha jb B_CallbackChild wala prop me chang hoga to ye component re render hoga
export default React.memo(B_CallbackChild)