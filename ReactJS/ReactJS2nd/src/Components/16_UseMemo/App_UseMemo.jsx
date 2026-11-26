
import B_WithOutUseMemo from "./B_WithOutUseMemo"
import C_WithUseMemo from "./C_WithUseMemo"
import D_MemoParent from "./D_MemoParent"

function App_UseMemo() {
  return (
    <div className="w-100 h-100 mx-35 mt-12 flex flex-col items-center justify-center rounded-2xl border border-amber-400">
     
        <h1>useMemo Hook</h1>

        <B_WithOutUseMemo />

        <C_WithUseMemo />

        <D_MemoParent />

    </div>
  )
}

export default App_UseMemo