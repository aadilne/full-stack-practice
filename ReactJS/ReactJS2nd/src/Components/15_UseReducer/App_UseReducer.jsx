import A_SingleValue from "./A_SingleValue"
import B_MultipalValue from "./B_MultipalValue"
import C_Form from "./C_Form"

function App_UseReducer() {
  return (
    <div className="w-100 h-70 mx-35 mt-12 flex flex-col items-center justify-center rounded-2xl border border-amber-400">
        <p>useReduser</p>
        <A_SingleValue />
        <B_MultipalValue />
        <C_Form />
    </div>
  )
}

export default App_UseReducer