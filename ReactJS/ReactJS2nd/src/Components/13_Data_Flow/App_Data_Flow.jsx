import Prop_Drilling from "./Prop_Drilling"
import State_Lifting from "./State_Lifting"

function App_Data_Flow() {
  return (
    <div className="w-100 h-70 mx-35 mt-12 flex flex-col items-center justify-center rounded-2xl border border-amber-400">
        <h1 className="text-xl font-bold  text-red-200 ">Prop Driling State Lifting and State Management</h1>
        <Prop_Drilling />

        <State_Lifting />

    </div>
  )
}

export default App_Data_Flow