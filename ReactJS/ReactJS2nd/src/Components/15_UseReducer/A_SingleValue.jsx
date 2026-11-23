
import { useReducer } from "react"

function A_SingleValue() {

    const [ checked ,  toggle] =  useReducer((checked) => !checked , false);

  return (
    <div>
        <p>A useReducer with single value</p>

        <label htmlFor="check">Term & Condition</label>
        <input type="checkbox" checked={checked} id="check" onChange={toggle} />

        <p>{checked ? "Checked" : "Not Checked"}</p>


    </div>
  )
}

export default A_SingleValue