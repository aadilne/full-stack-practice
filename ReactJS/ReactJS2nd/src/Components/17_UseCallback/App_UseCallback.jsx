
import A_CallbackCounter from "./A_CallbackCounter"
import B_CallbackParent from "./B_CallbackParent"

function App_UseCallback() {

  return (
    <div>
        <h1>useCallback Hook </h1>

        <A_CallbackCounter />

        <B_CallbackParent />

    </div>
  )
}

export default App_UseCallback