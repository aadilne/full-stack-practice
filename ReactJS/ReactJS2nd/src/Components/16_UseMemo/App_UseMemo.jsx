
import B_WithOutUseMemo from "./B_WithOutUseMemo"
import C_WithUseMemo from "./C_WithUseMemo"

function App_UseMemo() {
  return (
    <div>
        <h1>useMemo Hook</h1>

        <B_WithOutUseMemo />

        <C_WithUseMemo />

    </div>
  )
}

export default App_UseMemo