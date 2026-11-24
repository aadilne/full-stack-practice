
import { useReducer } from "react"

function B_MultipalValue() {

  function reducer(state , action){
    switch(action.type){   // yeha pr dispatch function object me data de rha hai to action.type se data le rha hai 
      case  "increment" :
        return {count : state.count + 1} // yaha pr count : keye creat kr rhe hai taki initial value count : 0 se same replace hoga aur state ko dedega 
      case "decrement" :
        return {count : state.count - 1}
      case "reset" :
        return {count : 0}
      
      default :
      return state;
    }

  }
                                             // yaha pr object me initialValue accept kr rha hai 
  const [state , dispatch] = useReducer(reducer , {count : 0 })
  return (
    <div>
      <p>Count {state.count}</p>
                                     {/* yaha pr object me value de rehe hai initialValue ko or dispatch reducer function btata hai kya krna hai aur kb krna hai */}
      <button onClick={() => dispatch({type : "increment"})}>➕</button>
      <button onClick={() => dispatch({type : "decrement"})}>➖</button>
      <button onClick={() => dispatch({type : "reset"})}>🔃</button>
    </div>
  )
}

export default B_MultipalValue