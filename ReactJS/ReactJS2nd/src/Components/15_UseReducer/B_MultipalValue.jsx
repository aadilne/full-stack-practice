
import { useReducer } from "react"

function B_MultipalValue() {

  function reducer(state , action){
    switch(action.type){
      case  "increment" :
        return {count : state.count + 1}
      case "decrement" :
        return {count : state.count - 1}
      case "reset" :
        return {count : 0}
      
      default :
      return state;
    }

  }

  const [state , dispatch] = useReducer(reducer , {count : 0 })
  return (
    <div>
      <p>Count {state.count}</p>
      <button onClick={() => dispatch({type : "increment"})}>➕</button>
      <button onClick={() => dispatch({type : "decrement"})}>➖</button>
      <button onClick={() => dispatch({type : "reset"})}>🔃</button>
    </div>
  )
}

export default B_MultipalValue