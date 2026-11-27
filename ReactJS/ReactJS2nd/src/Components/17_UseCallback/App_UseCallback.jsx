
import A_CallbackCounter from "./A_CallbackCounter"
import B_CallbackParent from "./B_CallbackParent"

function App_UseCallback() {

  return (
    <div className="w-100 h-70 mx-35 mt-12 flex flex-col items-center justify-center rounded-2xl border border-amber-400" >
        <h1>useCallback Hook </h1>

        <A_CallbackCounter />

        <B_CallbackParent />

    </div>
  )
}

export default App_UseCallback